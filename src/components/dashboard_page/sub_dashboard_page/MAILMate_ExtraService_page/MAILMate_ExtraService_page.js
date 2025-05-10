import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppTheme from "../../../shared-theme/AppTheme";
import AppAppBar from "./components/AppAppBar";
import MainContent from "./components/MainContent";
import Latest from "./components/Latest";
import Footer from "./components/Footer";
import SideMenu from "../../components/SideMenu";
import AppNavbar from "../../components/AppNavbar";
import Stack from "@mui/material/Stack";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function MAILMate_ExtraService_page(props) {
  return (
    <AppTheme {...props}>
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
              borderTop: "1px solid",
              borderColor: "divider",
              mx: 3,
              py: 2,
            }}
          >
            <MainContent />
            <Latest />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
