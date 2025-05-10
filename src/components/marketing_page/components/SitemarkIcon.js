import * as React from 'react';
import './SitemarkIcon.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';



export default function SitemarkIcon() {
  const theme = useTheme();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);
  const [logos, setLogos] = useState(theme.palette.mode === 'light' ? 'dark' : 'white');
  
  
  useEffect(() => {
      if (selectedTheme === 'light' || selectedTheme === 'system') {
        setLogos('dark');
      } else {
        setLogos('white');
      } 
  }, [selectedTheme]);

  return (
    <Typography
    variant="h1"
    sx={{
      color: 'text.primary',
      fontSize: 'small',
      textDecoration: 'none',
    }}
    component={RouterLink}
    to="/marketing"

  >
    MAILMATE
  </Typography>
  );
}

