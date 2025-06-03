import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import './App.css';
import userImage from './assets/radim.png'; // пока не используется

function App() {
  const bioText = `Motivated C# developer with experience in ASP.NET Core. Strong
foundation in object-oriented programming. Committed to
continuous learning and staying updated with industry trends.
Passionate about code reviews and following clean code
principles. Collaborative team player with a passion for creating
efficient software solutions`; // пока не используется

  return (
    <Box sx={{ // Обертка для всей страницы, центрирует основной Box
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'top',
      justifyContent: 'center',
      background: '#f0f0f0', // Светло-серый фон для всей страницы
      padding: 2 // Небольшой отступ для страницы
    }}>
      <Box sx={{ // Основной "красивый" Box
        width: '80vw',         // 80% ширины видимой области экрана
        height: '70vh',        // 70% высоты видимой области экрана
        background: '#ffffff', // Белый фон для Box
        borderRadius: '12px',    // Скругленные углы
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)', // Приятная тень
        padding: 3,             // Внутренние отступы
        boxSizing: 'border-box', // Чтобы padding не увеличивал размеры
        display: 'flex',        // Для будущего контента
        alignItems: 'center',   // Для будущего контента
        justifyContent: 'center' // Для будущего контента
      }}>
        {/* Сюда можно будет добавить ваш текст, Grid, изображение и т.д. */}
        <Grid container spacing={2}>
          <Grid size={8}>
            <h2 style={{color: "#555", fontSize: '1.5rem'}} >{bioText}</h2>
          </Grid>
          <Grid size={4}>
            <Stack spacing={2}>
              <img style={{width: '80%', height: '80%', objectFit: 'cover'}} src={userImage} alt="User" />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
