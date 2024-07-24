import { Container, Box, Typography } from '@mui/material';
import * as React from 'react';

// TODO: some backend features...
function HelpPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{
        height: '92vh',
        position: 'relative',
      }}>
        <div style={{
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
          <Typography sx={{ color: '#ffffff', fontSize: 30 }}>В разработке</Typography>
        </div>
      </Box>
    </Container>
  );
}

export default HelpPage;
