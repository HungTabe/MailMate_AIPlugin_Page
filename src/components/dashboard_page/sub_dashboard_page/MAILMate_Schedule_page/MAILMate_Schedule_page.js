import * as React from "react";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "../../components/AppNavbar";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import AppTheme from "../../../shared-theme/AppTheme";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../../theme/customizations";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import MiniCalendar from "./components/MiniCalendar";
import CalendarList from "./components/CalendarList";
import WeekCalendar from "./components/WeekCalendar";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MailmateBotPage(props) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
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
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "calc(100vh - 120px)",
                borderTop: "1px solid",
                borderColor: "white",
              }}
            >
              {/* Sidebar */}
              <Box sx={{ width: "250px", borderRight: "1px solid #e0e0e0" }}>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    sx={{
                      bbackgroundColor: "#c2e7ff",
                      color: "#001d35",
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: "10px",
                      padding: "10px 20px",
                      boxShadow: "none",
                      "&:hover": { backgroundColor: "#a3d4ff" },
                    }}
                    fullWidth
                  >
                    Add Event
                  </Button>
                </Box>
                <MiniCalendar />
                <CalendarList />
              </Box>
              {/* Main Calendar */}
              <WeekCalendar />
            </Box>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
