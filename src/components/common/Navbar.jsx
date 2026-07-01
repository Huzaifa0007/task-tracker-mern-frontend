import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

import useAuth from "../../hooks/useAuth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid #e2e8f0",
        bgcolor: "#fff",
      }}
    >
      <Toolbar>
        <Typography variant="h5" fontWeight={700} sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>{user?.name}</Typography>

          <IconButton onClick={handleOpen}>
            <Avatar sx={{ bgcolor: "#2563eb" }}>
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleClose();
              }}
            >
              Profile
            </MenuItem>

            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
