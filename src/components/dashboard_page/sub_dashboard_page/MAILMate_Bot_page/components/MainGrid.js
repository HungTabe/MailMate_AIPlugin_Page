import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme, useMediaQuery } from '@mui/material';

export default function MainGrid() {
  const [input, setInput] = React.useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { sm: '100%', md: '1700px' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isMobile ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
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
      ) : (
        <>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography
              component="h2"
              variant="h3"
              sx={{ color: 'white', fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
            >
              Super Mate
            </Typography>
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 10 }}>
            <Typography
              variant="h2"
              sx={{ color: 'white', fontFamily: 'Roboto, sans-serif', fontWeight: 400 }}
            >
              Wish all the best come to you, Mate.
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: 'white', mb: 5, fontFamily: 'Roboto, sans-serif', fontWeight: 300 }}
            >
              How can I assist you today?
            </Typography>
            <TextField
              placeholder="What do you want to know?"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{
                width: { xs: '80%', md: '50%' },
                bgcolor: '#2a2a2a',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: 'none' },
                  '&:hover fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': { border: 'none' },
                },
                '& .MuiInputBase-input': { color: 'white', fontFamily: 'Roboto, sans-serif' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <i className="fas fa-search" style={{ color: 'white' }}></i>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
}