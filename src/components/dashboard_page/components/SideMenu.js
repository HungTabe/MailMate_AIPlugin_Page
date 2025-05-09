import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './SelectContent';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import OptionsMenu from './OptionsMenu';

import Tooltip from "@mui/material/Tooltip";
import useProfile from "../../../hook/profile/useProfile";
const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu() {
  const { profile, loading } = useProfile();

  if (loading) {
    return <div>Loading...</div>; // Hoặc skeleton loading
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
        <SelectContent />
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent />
        <CardAlert />
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: 'center',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Avatar
          sizes="small"
          alt={profile?.fullName || "User"}
          src={profile?.avatar}
          sx={{ width: 36, height: 36, bgcolor: "primary.main" }}
        >
          {!profile?.avatar &&
            (profile?.fullName
              ? profile.fullName.charAt(0).toUpperCase()
              : "U")}
        </Avatar>
        <Box
          sx={{
            mr: "auto",
            minWidth: 0, // Quan trọng: cho phép text overflow
            maxWidth: "calc(100% - 100px)", // Điều chỉnh theo nhu cầu
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              lineHeight: "16px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {profile?.fullName || "User"}
          </Typography>
          <Tooltip
            title={profile?.email || "user@example.com"}
            placement="top"
            arrow
          >
            <Typography
              variant="caption"
              title={profile?.email || "user@example.com"}
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "block",
                maxWidth: "100%", // Đảm bảo email không vượt quá khung
              }}
            >
              {profile?.email || "user@example.com"}
            </Typography>
          </Tooltip>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
