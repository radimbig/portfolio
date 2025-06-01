using Amazon.Lambda.AspNetCoreServer.Hosting;
using System.Threading.RateLimiting;
using Telegram.Bot;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);
builder.Services.AddRateLimiter(options =>
{
    options.AddPolicy("IpPolicy", context =>
    {
        var ip = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
        return RateLimitPartition.GetFixedWindowLimiter(ip, _ => new FixedWindowRateLimiterOptions
        {
            PermitLimit = 5, // максимум 5 запросов
            Window = TimeSpan.FromMinutes(1), // в течение 1 минуты
            QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
            QueueLimit = 0
        });
    });
});

string fronendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL") ?? "http://localhost:3000";


builder.Services.AddCors(options =>
{
    options.AddPolicy("MYCORS", policy =>
    {
        policy.WithOrigins(fronendUrl) // Разрешаем только этот адрес
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});



var app = builder.Build();
app.UseHttpsRedirection();


string? chat_id_string = Environment.GetEnvironmentVariable("CHAT_ID");
if(chat_id_string == null)
{
    throw new Exception("CHAT_ID environment variable is not set.");
}
int chat_id = int.Parse(chat_id_string);
string? bot_token = Environment.GetEnvironmentVariable("BOT_TOKEN");
if(bot_token == null)
{
    throw new Exception("BOT_TOKEN environment variable is not set.");
}

var botClient = new TelegramBotClient(bot_token);

// Отправка сообщения
await botClient.SendMessage(
    chatId: chat_id, // ID чата
    text: "Api initialization"
);

app.UseRateLimiter();
app.UseCors("MYCORS");
app.MapPost("/send", async (string message) =>
{
    if (string.IsNullOrWhiteSpace(message))
    {
        return Results.BadRequest("Message cannot be empty.");
    }
    try
    {
        await botClient.SendMessage(
            chatId: chat_id, // ID чата
            text: message
        );
        return Results.Ok("Message sent successfully.");
    }
    catch (Exception ex)
    {
        return Results.Problem($"Error sending message: {ex.Message}");
    }
}).RequireRateLimiting("IpPolicy");

app.Run();


