import React from 'react';
import { styled, Box, Typography } from '@mui/material';
import EmailItem from './EmailItem';

const StyledEmailList = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
}));

const EmailList = ({ emails }) => (
  <StyledEmailList>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
        Inbox
      </Typography>
    </Box>
    {emails.map((email, index) => (
      <EmailItem
        key={index}
        sender={email.sender}
        subject={email.subject}
        date={email.date}
      />
    ))}
  </StyledEmailList>
);

export default EmailList;