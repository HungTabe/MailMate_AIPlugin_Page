import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import ForgotPassword from "./components/ForgotPassword";
import AppTheme from "../../shared-theme/AppTheme";
import ColorModeSelect from "../../shared-theme/ColorModeSelect";

import { GoogleIcon } from "./components/CustomIcons";
// import SitemarkIcon from "../marketing_page/components/SitemarkIcon";
import SitemarkIcon from "../../utils/SitemarkIcon";

import { useForm } from "react-hook-form";
import useSignInForm from "./useSignInForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmEmailAccessModal from "./components/ConfirmEmail";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function TransactionCancel(props) {

  const [confirmModalOpen, setConfirmModalOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(null); // store email + password
  const navigate = useNavigate();
  const handleClickDashboard = () => {
     navigate("/dashboard");
  };

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isAuthorized = params.get("emailAuthorized") === "true";
    const isError = params.get("error");

    if (isAuthorized) {
      toast.success("Email đã được xác thực thành công!");
      navigate("/dashboard");
    } else if (isError) {
      toast.error("Xác thực email không thành công. Vui lòng thử lại.");
    }

    // Xoá query params trên URL
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }, []);

  // Using React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { error: apiError, error, submitForm } = useSignInForm();

  const success = {
        status: "success",
        message: "Transaction Complete",
      };

  React.useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, []);

  const onSubmit = async (data) => {
    const event = {
      preventDefault: () => {},
      target: {
        email: { name: "email", value: data.email },
        password: { name: "password", value: data.password },
      },
    };

    const toastId = toast.loading("Loading...");
    const result = await submitForm(event);

    toast.update(toastId, {
      render: result.message,
      type: result.status,
      isLoading: false,
      autoClose: 2000,
      closeOnClick: true,
    });

    if (result.status === "success") {
      // Lưu thông tin người dùng vào state hoặc localStorage
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", result.token);

      // Mở modal yêu cầu xác thực Gmail
      setFormData(data);
      setConfirmModalOpen(true);
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Transaction Canceled
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <ErrorOutlineIcon sx={{fontSize: 200, mx: "auto", my: 5}}/>
            <Divider></Divider>
            <Button type="submit" fullWidth variant="contained" onClick={handleClickDashboard}>
              Back to Dashboard
            </Button>
          </Box>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            theme="colored"
            toastStyle={{ fontSize: "16px" }}
          />
        </Card>
        <ConfirmEmailAccessModal
          open={confirmModalOpen}
          onClose={() => setConfirmModalOpen(false)}
        />
      </SignInContainer>
    </AppTheme>
  );
}

