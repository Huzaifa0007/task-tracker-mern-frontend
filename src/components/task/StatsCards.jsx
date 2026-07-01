import { Grid, Paper, Typography } from "@mui/material";

function Card({ title, value, color }) {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 4,
        borderRadius: 4,
        borderLeft: `6px solid ${color}`,
        transition: "all .3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 10,
        },
      }}
    >
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="h3" fontWeight={700}>
        {value}
      </Typography>
    </Paper>
  );
}

function StatsCards({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter((task) => task.status === "Pending").length;

  const progress = tasks.filter((task) => task.status === "In Progress").length;

  const completed = tasks.filter((task) => task.status === "Completed").length;

  return (
    <Grid container spacing={4} mb={4}>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Card title="Total Tasks" value={total} color="#2563eb" />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Card title="Pending" value={pending} color="#f59e0b" />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Card title="In Progress" value={progress} color="#0ea5e9" />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <Card title="Completed" value={completed} color="#22c55e" />
      </Grid>
    </Grid>
  );
}

export default StatsCards;
