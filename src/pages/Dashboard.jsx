import { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardLayout from "../layouts/DashboardLayout";
import StatsCards from "../components/task/StatsCards";
import { getTasks } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data || []);
    } catch {
      toast.error("Failed to load dashboard.");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const recentTasks = [...tasks]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Dashboard
      </Typography>

      <StatsCards tasks={tasks} />

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Recent Tasks</Typography>

              <Button onClick={() => navigate("/tasks")}>View All</Button>
            </Stack>

            {recentTasks.length === 0 ? (
              <Typography color="text.secondary">
                No tasks available.
              </Typography>
            ) : (
              recentTasks.map((task) => (
                <Box
                  key={task._id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1.5,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <Box>
                    <Typography fontWeight={600}>{task.title}</Typography>

                    <Typography variant="body2" color="text.secondary">
                      {task.status}
                    </Typography>
                  </Box>

                  <AssignmentIcon color="primary" />
                </Box>
              ))
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="h6" mb={2}>
              Quick Actions
            </Typography>

            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/tasks")}
              >
                Manage Tasks
              </Button>

              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate("/profile")}
              >
                View Profile
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;
