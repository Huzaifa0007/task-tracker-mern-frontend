import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          p: 3,
          fontWeight: 700,
        }}
      >
        Task Tracker
      </Typography>

      <Divider sx={{ bgcolor: "#334155" }} />

      <List>
        <ListItemButton
          selected={location.pathname === "/dashboard"}
          onClick={() => navigate("/dashboard")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          selected={location.pathname === "/tasks"}
          onClick={() => navigate("/tasks")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <AssignmentIcon />
          </ListItemIcon>

          <ListItemText primary="My Tasks" />
        </ListItemButton>

        <Divider sx={{ bgcolor: "#334155", my: 2 }} />

        <ListItemButton
          selected={location.pathname === "/profile"}
          onClick={() => navigate("/profile")}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <PersonIcon />
          </ListItemIcon>

          <ListItemText primary="Profile" />
        </ListItemButton>

        <ListItemButton onClick={handleLogout}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
