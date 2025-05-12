import React from "react";
import { styled, Box, Typography, Divider } from "@mui/material";
import EmailItem from "./EmailItem";

const StyledEmailList = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: "auto",
  backgroundColor: "#000", // Dark background
  color: "#fff",
  padding: theme.spacing(2),
  height: "100vh",
}));

const EmailList = ({ emails }) => (
  <StyledEmailList>
    <Typography
      variant="h5"
      sx={{
        mb: 2,
        fontWeight: "bold",
        color: "#fff",
      }}
    >
      Mail Inbox
    </Typography>
    <Divider sx={{ mb: 2, borderColor: "#444" }} />
    {emails.map((email, index) => (
      <EmailItem
        key={index}
        sender={email.sender}
        subject={email.subject}
        date={email.date}
        summary={email.summary}
        isRead={email.isRead}
      />
    ))}
  </StyledEmailList>
);

export default EmailList;
