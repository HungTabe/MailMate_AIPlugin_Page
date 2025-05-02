import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function MainGrid() {
  const [input, setInput] = React.useState('');

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' }, minHeight: '100vh'}}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography component="h2" variant="h3" sx={{ mb: 2 }} >
          Super Mate
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: 'white', mb: 0.1, fontFamily: 'system-ui' }}>
        Chào buổi chiều, Hung.
      </Typography>
      <Typography variant="h3" sx={{ color: 'white', mb: 5, fontFamily: 'system-ui' }}>
        Hôm nay tơi có thể giúp gì cho bạn?
      </Typography>
        <TextField
          placeholder="Bạn muốn biết gì?"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            width: '50%',
            bgcolor: '#2a2a2a',
            borderRadius: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { border: 'none' },
              '&:hover fieldset': { border: 'none' },
              '&.Mui-focused fieldset': { border: 'none' },
            },
            '& .MuiInputBase-input': { color: 'white' },
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

    </Box>
  );
}