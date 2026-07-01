import { Box } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          bgcolor: "#f5f7fb",
        }}
      >
        <Navbar />

        <Box sx={{ p: 4 }}>{children}</Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
