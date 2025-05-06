import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import AndroidIcon from '@mui/icons-material/Android';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

const mainListItems = [
  { text: 'Home', icon: <HomeRoundedIcon />, path: '/dashboard' },
  { text: 'Mail', icon: <AnalyticsRoundedIcon />, path: '/mail' },
  { text: 'Schedule', icon: <PeopleRoundedIcon />, path: '/schedule' },
  { text: 'MAILMate Bot', icon: <AssignmentRoundedIcon />, path: '/bot' },
  { text: 'MMate Agent', icon: <AndroidIcon />, path: '/agent' },
  { text: 'MMate Extra Service', icon: <AddToQueueIcon />, path: '/extra' },
];

// Secondary list omitted for brevity

export default function MenuContent() {
  const [searchParams] = useSearchParams();
  const initialIndex = parseInt(searchParams.get('index') || '0', 10);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedIndex(initialIndex); // Update state if URL changes
  }, [initialIndex]);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              to={`${item.path}?index=${index}&text=${encodeURIComponent(item.text)}`} // Add index to URL
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={`${item.text}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Secondary list here */}
    </Stack>
  );
}