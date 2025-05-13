import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = useCallback(() => {
    const newToastId = toast.loading("Logging out...");

    // Clear all application data
    localStorage.clear(); // Xóa toàn bộ localStorage
    sessionStorage.clear(); // Xóa toàn bộ sessionStorage

    // Reset all state
    setUser(null);

    // Navigate and force reload
    navigate("/", { replace: true });
    setTimeout(() => {
      window.location.reload();
    }, 100);

    toast.update(newToastId, {
      render: "Logged out successfully!",
      type: "success",
      isLoading: false,
      autoClose: 1500,
    });
  }, [navigate]);

  const logout = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(
    (confirmed) => {
      setOpenDialog(false);
      if (confirmed) {
        handleLogout();
      }
    },
    [handleLogout]
  );

  return (
    <AuthContext.Provider value={{ user, setUser, logout, handleLogout }}>
      {children}
      <Dialog
        open={openDialog}
        onClose={() => handleCloseDialog(false)}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "8px",
            padding: "20px",
            minWidth: "400px",
            backgroundColor: "#f7f7f7",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{ fontWeight: "bold", textAlign: "center", color: "#333" }}
        >
          Confirm Logout
        </DialogTitle>
        <DialogContent sx={{ padding: "10px 0", textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{ color: "#666", marginBottom: "20px" }}
          >
            Are you sure you want to log out?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Button
            onClick={() => handleCloseDialog(false)}
            color="secondary"
            sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleCloseDialog(true)}
            color="primary"
            sx={{ "&:hover": { backgroundColor: "#e0e0e0" } }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
