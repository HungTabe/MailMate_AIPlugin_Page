import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Tooltip,
  Divider,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const stripHtml = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  ["script", "style"].forEach((tag) =>
    tmp.querySelectorAll(tag).forEach((el) => el.remove())
  );
  return (tmp.textContent || tmp.innerText || "").replace(/\s+/g, " ").trim();
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const EmailItem = ({ sender, subject, date, summary, isRead }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Paper
        elevation={isHovered ? 4 : 1}
        sx={{
          p: 2,
          mb: 1,
          cursor: "pointer",
          backgroundColor: isRead ? "#121212" : "#1f1f1f",
          borderLeft: isRead
            ? "4px solid transparent"
            : `4px solid ${theme.palette.primary.main}`,
          color: "#fff",
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "#2a2a2a",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box flex={1}>
            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight={isRead ? "normal" : "bold"}>
                {sender}
              </Typography>
              <Typography variant="caption" color="gray">
                {new Date(date).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={isRead ? "normal" : "bold"}
              noWrap
            >
              {subject}
            </Typography>
            {isHovered && (
              <Typography variant="body2" color="gray" noWrap>
                {summary}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{subject}</Typography>
          <Tooltip title="Close">
            <IconButton onClick={handleCloseModal} sx={{ color: "#fff" }}>
              <Close />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            backgroundColor: "#111",
            color: "#fff",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Box>
              <Typography variant="subtitle1">{sender}</Typography>
              <Typography variant="caption" color="gray">
                {new Date(date).toLocaleString()}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 2, borderColor: "#444" }} />

          <Box
            sx={{
              lineHeight: 1.6,
              color: "#fff",
              overflowWrap: "break-word", // Break long words
              wordBreak: "break-word", // Prevent text overflow
              maxHeight: "calc(60vh - 100px)", // Adjust height for content within the box
              overflowY: "auto", // Enable vertical scroll if needed
              "& a": { color: "#90caf9" },
              "& img": { maxWidth: "100%", borderRadius: 1 },
            }}
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </DialogContent>

        <DialogActions
          sx={{ backgroundColor: "#000", borderTop: "1px solid #333" }}
        >
          <Button
            onClick={handleCloseModal}
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#555" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmailItem;
