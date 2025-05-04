import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const days = [
  { day: 'CN', date: '', empty: true },
  { day: 'T2', date: '', empty: true },
  { day: 'T3', date: '', empty: true },
  { day: 'T4', date: '', empty: true },
  { day: 'T5', date: 4 },
  { day: 'T6', date: 5 },
  { day: 'T7', date: 6 },
  { day: 'CN', date: 7 },
  { day: 'T2', date: 8 },
  { day: 'T3', date: 9 },
  { day: 'T4', date: 10 },
];

const hours = Array.from({ length: 24 }, (_, i) => i + 7); // 7AM to 8PM

const WeekCalendar = () => (
  <Box sx={{ flex: 1, overflow: 'auto' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #e0e0e0' }}>
      <Typography variant="h6">Tháng 5, 2025</Typography>
      <Box sx={{ flexGrow: 1 }} />
      {/* <Button variant="outlined" size="small" sx={{ mr: 1 }}>
        Tuần
      </Button> */}
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: '60px repeat(7, 1fr)' }}>
      {/* Hours column */}
      <Box>
        {hours.map((hour) => (
          <Box
            key={hour}
            sx={{
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid #e0e0e0',
              color: '#666',
            }}
          >
            {hour <= 12 ? `${hour}AM` : `${hour - 12}PM`}
          </Box>
        ))}
      </Box>
      {/* Days columns */}
      {days.filter((day) => !day.empty).map((day) => (
        <Box key={day.date} sx={{ position: 'relative', borderRight: '1px solid #e0e0e0' }}>
          <Box sx={{ textAlign: 'center', py: 1.05, borderBottom: '1px solid #e0e0e0' }}>
            <Typography variant="caption" sx={{ color: '#666' }}>{day.day}</Typography>
            <Typography variant="body1">{day.date}</Typography>
          </Box>
          {hours.map((hour) => (
            <Box
              key={`${day.date}-${hour}`}
              sx={{
                height: '60px',
                borderBottom: '1px solid #e0e0e0',
                position: 'relative',
                fontSize: '15px'
              }}
            >
              {day.date === 4 && hour === 11 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'red',
                    zIndex: 1,
                  }}
                />
              )}
              {day.date === 5 && hour === 18 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 4,
                    right: 4,
                    backgroundColor: '#e8f0fe',
                    border: '1px solid #1a73e8',
                    borderRadius: '4px',
                    p: 0.5,
                    color: '#1a73e8',
                    fontSize: '12px',
                  }}
                >
                  18h Tiếng Nhật Buổi 1/2
                </Box>
              )}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </Box>
);

export default WeekCalendar;