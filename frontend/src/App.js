import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import './App.css';
import userImage from './assets/radim.png'; // Make sure radim.png is in src/assets/

function App() {
  const bioText = "Motivated C# developer with experience in ASP.NET Core. Strong foundation in object-oriented programming. Committed to continuous learning and staying updated with industry trends. Passionate about code reviews and following clean code principles. Collaborative team player with a passion for creating efficient software solutions.";

  return (
    <Box sx={{ 
      width: '100%', 
      minHeight: '100vh', // Changed to 100vh to ensure gradient covers full page
      padding: { xs: 1, sm: 2, md: 3 }, // Responsive padding for the main Box
      // New Lighter background for the entire page
      background: '#e3e6e8', // Very light gray for the page background
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'flex-start', // Changed from 'center' to 'flex-start' to align Paper to the top
      justifyContent: 'center'
    }}>
      <Paper elevation={0} /* Removed elevation to blend with background */ sx={{ 
        width: '100%',
        maxWidth: { xs: '98vw', md: '95vw', lg: '1800px' }, // Made wider
        display: 'flex', 
        boxSizing: 'border-box',
        overflow: 'hidden', 
        borderRadius: 3, // Slightly more rounded corners
        // New White background for the Paper
        background: '#e3e6e8', // Paper background same as Page background
        marginTop: { xs: 2, md: 4 } // Added some margin top for spacing from the very top edge
      }}>
        <Grid container spacing={3} alignItems="stretch" sx={{ flexGrow: 1 /* justifyContent: 'center' removed */ }}>
          {/* Left Column: Text - Restored md size */}
          <Grid xs={12} md={7} sx={{ 
            padding: { xs: 3, sm: 4, md: 5 }, 
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center', 
            minHeight: 'calc(70vh * 0.7)'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ maxWidth: '650px' /* Slightly increased max width for text */ }}
            >
              <Typography variant="h4" /* Slightly larger title */ component="h1" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: '#333' /* Darker text color for light background */ 
              }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#555', /* Darker text color for light background */ 
                lineHeight: 1.7, 
                textAlign: 'left' 
              }}>
                {bioText}
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Column: Image - Restored md size */}
          <Grid xs={12} md={5} sx={{  
            boxSizing: 'border-box',
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'flex-end', // Explicitly align content of this Grid item to the right
            overflow: 'hidden',
            // Padding will be affected by Grid spacing, adjust if necessary
            // paddingLeft: { xs: 2, md: 1 }, 
            // paddingRight: { xs: 2, md: 0 }, 
            // paddingTop: { xs: 2, md: 2 },
            // paddingBottom: { xs: 2, md: 2 },
            height: { xs: 'auto', md: 'calc(70vh * 0.7)'},
            minHeight: '300px'
            // backgroundColor: 'rgba(255,0,0,0.15)' // DEBUG: Removed for now
          }}>
            <motion.img
              src={userImage}
              alt="Radim"
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                // marginLeft: 'auto' // Can be kept or removed if parent justifyContent works
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default App;
