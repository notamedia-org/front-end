import React from 'react';
import { Container, Box } from '@mui/material';
import image from '../../assets/main-logo.png';

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{
          height: '92vh',
          position: 'relative',
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            width: '60vw',
            height: '18vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src={image} alt='main logo' style={{
              width: '56vw',
            }}></img>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
