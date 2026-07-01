import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import DashboardLayout from "../layouts/DashboardLayout";
import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <Card
        sx={{
          maxWidth: 650,
          mx: "auto",
          mt: 4,
          borderRadius: 4,
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: "primary.main",
                fontSize: 40,
              }}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar>

            <Typography variant="h4">{user?.name}</Typography>

            <Typography color="text.secondary">{user?.email}</Typography>

            <Chip label="Active User" color="success" />

            <Divider sx={{ width: "100%" }} />

            <Box width="100%">
              <Typography>
                <strong>Joined:</strong>{" "}
                {new Date(user?.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Profile;
