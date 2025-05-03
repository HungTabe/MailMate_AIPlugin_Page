import * as React from 'react';

import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from '../../components/AppNavbar';
// import AppNavbar from './components/AppNavbar';

import Header from '../../components/Header';
// import MainGrid from './components/MainGrid';
import SideMenu from '../../components/SideMenu';
import AppTheme from '../../../shared-theme/AppTheme';
// import AppTheme from '../shared-theme/AppTheme';

import { styled } from '@mui/material/styles';
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography, Checkbox, Divider } from '@mui/material';
import { Mail, Star, Send, Drafts, ExpandMore, Chat, Add } from '@mui/icons-material';
import LabelIcon from '@mui/icons-material/Label';
import ListItemButton from '@mui/material/ListItemButton';
import { useTheme, useMediaQuery } from '@mui/material';


import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../../theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const Sidebar = styled(Box)(({ theme }) => ({
  width: '200px',
  backgroundColor: 'black',
  borderRight: '1px solid',
  height: '100vh',
  // paddingTop: theme.spacing(2),
}));

const EmailList = styled(Box)(({ theme }) => ({
  flex: 1,
  // backgroundColor: '#fff',
  overflowY: 'auto',
  // padding: theme.spacing(2),

}));

const EmailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5),
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function MailmateBotPage(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const emails = [
    { sender: 'Duolingo', subject: 'Ban chi con 8 ngay de ban hoc...', date: '2 May' },
    { sender: 'Adobe Creative Cloud', subject: 'Explore a universe of ideas...', date: '2 May' },
    { sender: 'sadpanda884 on Instagram', subject: 'hungngob2tbc oi, hay bat kip...', date: '30 Apr' },
    { sender: 'ivan at Notion', subject: 'Notion 2.50: Meet Notion Mail...', date: '30 Apr' },
    { sender: 'CodePen', subject: 'Clip Path Shapes, GSAP Image...', date: '29 Apr' },
  ];
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        {isMobile ? (
          <>
          {/* <SideMenu /> */}
          <AppNavbar />
          <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            px: 2,
            mt: 10,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
            }}
          >
            Please install the mobile app to use this application on mobile devices size.
          </Typography>
          </Box>
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
           <Box sx={{ display: 'flex', width: '100%'}}>
              {/* Sidebar */}
              <Sidebar sx={{borderColor: 'divider',}}>
                <Box sx={{ px: 2, mb: 2 , mt: 2}}>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    sx={{
                      backgroundColor: '#c2e7ff',
                      color: '#001d35',
                      textTransform: 'none',
                      fontWeight: 500,
                      borderRadius: '10px',
                      borderColor: 'divider',
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
                  <ListItemButton selected sx={{ borderRadius: '10px 10px 10px 10px', backgroundColor: '#d3e3fd', py: 0.5  }}>
                    <ListItemIcon sx={{mr: 2, fontSize: '5px'}} ><Mail sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="Inbox" secondary="2,221" sx={{display: 'flex', justifyContent: 'space-between'}} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: '10px 10px 10px 10px', py: 0.5 }}>  
                    <ListItemIcon sx={{mr: 2,}} ><Star sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                    <ListItemIcon sx={{mr: 2,}} ><Send sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="Sent" />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                    <ListItemIcon sx={{mr: 2,}} ><Drafts sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="Drafts" secondary="23" sx={{display: 'flex', justifyContent: 'space-between'}} />
                  </ListItemButton>
                  <ListItemButton sx={{ borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                    <ListItemIcon sx={{mr: 2,}} ><ExpandMore sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="More" />
                  </ListItemButton>
                  <Divider sx={{ my: 1 }} />
                  <ListItemButton sx={{ borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                    <ListItemIcon sx={{mr: 2,}} ><Chat sx={{fontSize: '15px'}} /></ListItemIcon>
                    <ListItemText primary="Chat" />
                  </ListItemButton>
                </List>
                <Box sx={{ px: 2, mt: 2 }}>
                  <Typography variant="subtitle2">Labels</Typography>
                  <List>
                    <ListItemButton sx={{ px: 1 , borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                      <ListItemIcon sx={{mr: 2,}} ><LabelIcon sx={{fontSize: '15px'}} /></ListItemIcon>
                      <ListItemText primary="Spam"/>
                    </ListItemButton>
                    <ListItemButton sx={{ px: 1 , borderRadius: '10px 10px 10px 10px', py: 0.5   }}>
                      <ListItemIcon sx={{mr: 2,}} ><LabelIcon sx={{fontSize: '15px'}} /></ListItemIcon>
                      <ListItemText primary="Scheduled"/>
                    </ListItemButton>
                    <ListItemButton sx={{ px: 1  , borderRadius: '10px 10px 10px 10px', py: 0.5  }}>
                      <ListItemIcon sx={{mr: 2,}} ><LabelIcon sx={{fontSize: '15px'}} /></ListItemIcon>
                      <ListItemText primary="CustomerQ&A"/>
                    </ListItemButton>
                  </List>
                </Box>
              </Sidebar>

              {/* Email List */}
              <EmailList>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ml: 2, mt: 2}}>Inbox</Typography>
                </Box>
                {emails.map((email, index) => (
                  <EmailItem key={index}>
                    <Checkbox />
                    <Star sx={{ color: '#f4b400', mx: 1 }} />
                    <Typography sx={{ flex: 1, fontWeight: 'bold' }}>{email.sender}</Typography>
                    <Typography sx={{ flex: 3 }}>{email.subject}</Typography>
                    <Typography sx={{ color: '#5f6368', mx: 1 }}>{email.date}</Typography>
                  </EmailItem>
                ))}
              </EmailList>
            </Box>
          </Stack>
        </Box>
        </>
        )
        }
      </Box>
    </AppTheme>
  );
}
