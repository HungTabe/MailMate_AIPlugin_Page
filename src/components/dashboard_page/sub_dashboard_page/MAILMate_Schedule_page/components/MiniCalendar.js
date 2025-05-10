import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
const firstDayOfMonth = 4; // 1/5/2025 là Thứ 4 (0: CN, 1: T2, ..., 4: T5)

const MiniCalendar = () => (
  <Box sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="subtitle1">Tháng 5, 2025</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton size="small" sx={{ p: 0, width: '25px', height: '25px', mx: 0.25 }} ><ChevronLeft /></IconButton>
      <IconButton size="small" sx={{ p: 0, width: '25px', height: '25px', mx: 0.25 }} ><ChevronRight /></IconButton>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
      {['Cn', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map((day) => (
        <Typography key={day} variant="caption" sx={{ color: '#666' }}>
          {day}
        </Typography>
      ))}
      {Array(firstDayOfMonth).fill(null).map((_, index) => (
        <Box key={`empty-${index}`} />
      ))}
      {daysInMonth.map((day) => (
        <Box
          key={day}
          sx={{
            p: 0.5,
            borderRadius: '50%',
            backgroundColor: day === 4 ? '#1a73e8' : 'transparent',
            color: day === 4 ? 'white' : 'inherit',
            textAlign: 'center',
          }}
        >
          {day}
        </Box>
      ))}
    </Box>
  </Box>
);

export default MiniCalendar;