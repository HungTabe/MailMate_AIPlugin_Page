import React from 'react';
import { styled, Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { Add, Mail, Star, Send, Drafts, ExpandMore, Chat, Label as LabelIcon } from '@mui/icons-material';
import { listItemStyles, selectedListItemStyles, labelListItemStyles, iconStyles } from './EmailSidebar.styles';

const StyledSidebar = styled(Box)(({ theme }) => ({
  width: '200px',
  backgroundColor: 'black',
  borderRight: '1px solid',
  borderColor: theme.palette.divider,
  height: '100vh',
}));

const sidebarItems = [
  { label: 'Inbox', icon: <Mail sx={iconStyles} />, secondary: '2,221', selected: true },
  { label: 'Starred', icon: <Star sx={iconStyles} /> },
  { label: 'Sent', icon: <Send sx={iconStyles} /> },
  { label: 'Drafts', icon: <Drafts sx={iconStyles} />, secondary: '23' },
  { label: 'More', icon: <ExpandMore sx={iconStyles} /> },
];

const chatItem = { label: 'Chat', icon: <Chat sx={iconStyles} /> };

const labelItems = [
  { label: 'Spam', icon: <LabelIcon sx={iconStyles} /> },
  { label: 'Scheduled', icon: <LabelIcon sx={iconStyles} /> },
  { label: 'CustomerQ&A', icon: <LabelIcon sx={iconStyles} /> },
];

const EmailSidebar = () => (
  <StyledSidebar>
    <Box sx={{ px: 2, mb: 2, mt: 2 }}>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{
          backgroundColor: '#c2e7ff',
          color: '#001d35',
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '10px',
          padding: '10px 20px',
          boxShadow: 'none',
          '&:hover': { backgroundColor: '#a3d4ff' },
        }}
        fullWidth
      >
        Compose
      </Button>
    </Box>
    <List>
      {sidebarItems.map((item, index) => (
        <ListItemButton
          key={index}
          selected={item.selected}
          sx={item.selected ? selectedListItemStyles : listItemStyles}
        >
          <ListItemIcon sx={iconStyles}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.label}
            secondary={item.secondary}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          />
        </ListItemButton>
      ))}
      <Divider sx={{ my: 1 }} />
      <ListItemButton sx={listItemStyles}>
        <ListItemIcon sx={iconStyles}>{chatItem.icon}</ListItemIcon>
        <ListItemText primary={chatItem.label} />
      </ListItemButton>
    </List>
    <Box sx={{ px: 2, mt: 2 }}>
      <Typography variant="subtitle2">Labels</Typography>
      <List>
        {labelItems.map((item, index) => (
          <ListItemButton key={index} sx={labelListItemStyles}>
            <ListItemIcon sx={iconStyles}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  </StyledSidebar>
);

export default EmailSidebar;