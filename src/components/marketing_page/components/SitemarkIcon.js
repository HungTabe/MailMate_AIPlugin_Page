import * as React from 'react';
import './SitemarkIcon.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/system';


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
      <h1 style={{ color: logos === 'dark' ? 'black' : 'white' }}>MAILMATE</h1>
  );
}
