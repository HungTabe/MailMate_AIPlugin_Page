import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Stack,
  Avatar,
  Fade,
  Grow,
  Zoom,
  Divider,
  alpha,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  LockPerson,
  MailLock,
  Google,
  ArrowForward,
  CheckCircleOutline,
  Security,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const darkBlueGradient = (theme) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #0a1f3a 100%)`,
  boxShadow: `0 4px 20px 0 ${alpha("#102a4c", 0.5)}`,
});

const metallicBlue = {
  light: "#3a6ea5",
  main: "#1a4b8c",
  dark: "#0a2d5a",
};

export default function NavyAuthModal({ open, onClose }) {
  const theme = useTheme({
    palette: {
      primary: metallicBlue,
      mode: "dark",
    },
  });

  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGoogleAuth = async () => {
    setProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/email-accounts/connect`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      if (data.authUrl) {
        setSuccess(true);
        setTimeout(() => {
          localStorage.setItem("redirectAfterAuth", "/dashboard");
          window.location.href = data.authUrl;
        }, 1000);
      }
    } catch (error) {
      toast.error(error.message || "Authorization failed");
    } finally {
      setProcessing(false);
    }
  };

  const handleSkip = () => {
    navigate("/dashboard");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={!processing ? onClose : null}
      aria-labelledby="navy-auth-dialog"
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "#0a1a2f",
          border: `1px solid ${alpha("#3a6ea5", 0.3)}`,
          boxShadow: `0 8px 32px 0 ${alpha("#0a2d5a", 0.8)}`,
        },
      }}
    >
      {/* Navy Gradient Header */}
      <Box
        sx={{
          ...darkBlueGradient(theme),
          py: 3,
          px: 4,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${alpha(
              "#3a6ea5",
              0.7
            )}, transparent)`,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar
            sx={{
              bgcolor: alpha("#ffffff", 0.1),
              width: 48,
              height: 48,
              backdropFilter: "blur(4px)",
            }}
          >
            <Security
              sx={{
                color: "#ffffff",
                filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))",
              }}
            />
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="600" color="common.white">
              Secure Mail Access
            </Typography>
            <Typography variant="body2" color={alpha("#ffffff", 0.8)}>
              Premium encrypted connection
            </Typography>
          </Box>
        </Stack>
      </Box>

      <DialogContent
        sx={{
          py: 4,
          px: 4,
          bgcolor: "#0f243f",
          backgroundImage: `radial-gradient(${alpha(
            "#3a6ea5",
            0.1
          )} 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      >
        <Grow in={!success} timeout={500}>
          <Stack spacing={3}>
            <Typography variant="body1" color="#a8c4e8">
              Enable these naval-grade features:
            </Typography>

            <Stack spacing={2.5}>
              {[
                "End-to-end encrypted sync",
                "Military-grade analytics",
                "Deep sea data protection",
                "Admiral priority system",
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      minWidth: 28,
                      height: 28,
                      borderRadius: "4px",
                      bgcolor: alpha(metallicBlue.light, 0.2),
                      border: `1px solid ${metallicBlue.light}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a8c4e8",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body1" color="#c9d8f0">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Divider
              sx={{
                my: 2,
                borderColor: alpha(metallicBlue.light, 0.3),
                "&::before, &::after": {
                  borderColor: "inherit",
                },
              }}
            />

            <Stack direction="row" spacing={2} alignItems="flex-start">
              <MailLock
                sx={{
                  color: metallicBlue.light,
                  fontSize: 36,
                  mt: 0.5,
                }}
              />
              <Typography variant="body2" color="#8fa8d0">
                We request{" "}
                <strong style={{ color: "#ffffff" }}>read-only</strong> access
                with
                <br />
                <span style={{ color: metallicBlue.light }}>
                  ISO-27001 certified encryption
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Grow>

        <Fade in={success} timeout={800}>
          <Box
            sx={{
              textAlign: "center",
              py: 4,
              display: success ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CheckCircleOutline
              sx={{
                fontSize: 80,
                mb: 2,
                color: metallicBlue.light,
                filter: "drop-shadow(0 0 8px rgba(58, 110, 165, 0.5))",
              }}
            />
            <Typography variant="h6" color="common.white" gutterBottom>
              Clearance Granted
            </Typography>
            <Typography color="#8fa8d0">
              Charting course to dashboard...
            </Typography>
          </Box>
        </Fade>
      </DialogContent>

      <DialogActions
        sx={{
          px: 4,
          py: 3,
          bgcolor: "#0a1a2f",
          borderTop: `1px solid ${alpha(metallicBlue.light, 0.2)}`,
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleSkip}
          disabled={processing}
          sx={{
            color: "#8fa8d0",
            "&:hover": {
              color: "#ffffff",
              bgcolor: alpha(metallicBlue.light, 0.1),
            },
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
        >
          Request Later
        </Button>

        <Zoom in={!success}>
          <Button
            onClick={handleGoogleAuth}
            disabled={processing}
            variant="contained"
            startIcon={processing ? null : <Google />}
            endIcon={!processing && <ArrowForward />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              background: `linear-gradient(90deg, ${metallicBlue.main}, ${metallicBlue.dark})`,
              boxShadow: `0 2px 8px ${alpha(metallicBlue.dark, 0.5)}`,
              animation: `${pulse} 3s infinite`,
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: `0 4px 12px ${alpha(metallicBlue.dark, 0.7)}`,
                background: `linear-gradient(90deg, ${metallicBlue.light}, ${metallicBlue.main})`,
              },
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
          >
            {processing ? "Establishing Secure Link..." : "Authorize now"}
          </Button>
        </Zoom>
      </DialogActions>
    </Dialog>
  );
}
