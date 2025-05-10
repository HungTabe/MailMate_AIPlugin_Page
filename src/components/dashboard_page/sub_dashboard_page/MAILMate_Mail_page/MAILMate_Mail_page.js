import React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../../components/AppNavbar';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import AppTheme from '../../../shared-theme/AppTheme';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../theme/customizations';
import EmailSidebar from './components/EmailSidebar';
import EmailList from './components/EmailList';
import MobileMessage from '../../utils/components/MobileMessage';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const emails = [
  { sender: 'Duolingo', subject: 'Ban chi con 8 ngay de ban hoc...', date: '2 May' },
  { sender: 'Adobe Creative Cloud', subject: 'Explore a universe of ideas...', date: '2 May' },
  { sender: 'sadpanda884 on Instagram', subject: 'hungngob2tbc oi, hay bat kip...', date: '30 Apr' },
  { sender: 'ivan at Notion', subject: 'Notion 2.50: Meet Notion Mail...', date: '30 Apr' },
  { sender: 'CodePen', subject: 'Clip Path Shapes, GSAP Image...', date: '29 Apr' },
];

export default function MailmateBotPage(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        {isMobile ? (
          <>
            <AppNavbar />
            <MobileMessage />
          </>
        ) : (
          <>
            <SideMenu />
            <AppNavbar />
            <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                  : alpha(theme.palette.background.default, 1),
                overflow: 'auto',
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  mx: 3,
                  pb: 1,
                  mt: { xs: 8, md: 0 },
                }}
              >
                <Header />
              </Stack>
              <Stack
                spacing={2}
                sx={{
                  alignItems: 'center',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', width: '100%' }}>
                  <EmailSidebar />
                  <EmailList emails={emails} />
                </Box>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </AppTheme>
  );
}