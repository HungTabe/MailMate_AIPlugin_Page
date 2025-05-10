import React from 'react';
import { Box, Typography } from '@mui/material';

const MobileMessage = () => (
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      px: 2,
      mt: 10,
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500,
      }}
    >
      Please install the mobile app to use this application on mobile devices size.
    </Typography>
  </Box>
);

export default MobileMessage;