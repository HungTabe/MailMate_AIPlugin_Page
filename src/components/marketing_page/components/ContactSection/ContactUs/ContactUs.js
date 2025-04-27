import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import "./ContactUs.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useContactUsForm from "./useContactUsForm";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function ContactUs() {
  const {
    formData,
    isLoading,
    error,
    success,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  } = useContactUsForm();

  return (
    <div className="ContactUsForm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="full-name" required>
              Your Name
            </FormLabel>
            <OutlinedInput
              id="full-name"
              name="fullName"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              required
              size="small"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="email" required>
              Your mail
            </FormLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              autoComplete="email"
              required
              size="small"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="phone-number">
              Phone Number (Optional)
            </FormLabel>
            <OutlinedInput
              id="phone-number"
              name="phoneNumber"
              type="tel"
              placeholder="+1234567890"
              autoComplete="tel"
              size="small"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="last-name" required>
              MAILMate subscription
            </FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="planType"
                  value="Free"
                  checked={formData.planType === "Free"}
                  onChange={handleCheckboxChange}
                />
              }
              label="Free Ticket"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="planType"
                  value="Pro"
                  checked={formData.planType === "Pro"}
                  onChange={handleCheckboxChange}
                />
              }
              label="Pro Ticket"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="planType"
                  value="Business"
                  checked={formData.planType === "Business"}
                  onChange={handleCheckboxChange}
                />
              }
              label="Business Ticket"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={isLoading}
              sx={{
                color: 'black',
              }}
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </FormGrid>
        </Grid>
      </form>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", marginTop: "10px" }}>{success}</p>
      )}
    </div>
  );
}
