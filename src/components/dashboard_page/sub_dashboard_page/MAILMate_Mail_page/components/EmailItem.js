import React from 'react';
import { styled, Box, Typography, Checkbox } from '@mui/material';
import { Star } from '@mui/icons-material';

const StyledEmailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5),
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const EmailItem = ({ sender, subject, date }) => (
  <StyledEmailItem>
    <Checkbox />
    <Star sx={{ color: '#f4b400', mx: 1 }} />
    <Typography sx={{ flex: 1, fontWeight: 'bold' }}>{sender}</Typography>
    <Typography sx={{ flex: 3 }}>{subject}</Typography>
    <Typography sx={{ color: '#5f6368', mx: 1 }}>{date}</Typography>
  </StyledEmailItem>
);

export default EmailItem;