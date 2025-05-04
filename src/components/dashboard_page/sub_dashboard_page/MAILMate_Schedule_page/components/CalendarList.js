import React from 'react';
import { Box, Typography, Checkbox, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

const calendars = [
  { name: 'HungTran', color: '#1a73e8' },
  { name: 'Sinh nhật', color: '#34a853' },
  { name: 'Tasks', color: '#1a73e8' },
  { name: 'FUQN2, CT5, VUNT13, SEA...', color: '#fbbc05' },
  { name: 'Ngầy lễ ở Việt Nam', color: '#ff6d01' },
  { name: 'QN25_CPL_JAVA_01 - JAV...', color: '#1a73e8' },
];
const CalendarList = () => (
  <Box sx={{ py: 2 , px: 2, }}>
    <Typography variant="subtitle2" sx={{ mb: 1 }}>Lịch của tôi</Typography>
    <List dense sx={{ p: 0}} >
      {calendars.map((calendar, index) => (
        <ListItem key={index} disablePadding >
          <ListItemIcon>
            <Checkbox
              edge="start"
              defaultChecked
              sx={{
                color: calendar.color,
                '&.Mui-checked': { color: calendar.color },
              }}
            />
          </ListItemIcon>
          <ListItemText primary={calendar.name} />
        </ListItem>
      ))}
    </List>
    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>Lịch khác</Typography>
    <List dense sx={{ p: 0}}>
      <ListItem disablePadding>
        <ListItemIcon>
          <Checkbox edge="start" defaultChecked sx={{ color: '#1a73e8', '&.Mui-checked': { color: '#1a73e8' } }} />
        </ListItemIcon>
        <ListItemText primary="Kí hợp đồng TPCS" />
      </ListItem>
    </List>
  </Box>
);

export default CalendarList;