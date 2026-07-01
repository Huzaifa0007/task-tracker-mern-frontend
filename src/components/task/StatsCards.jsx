import { Grid, Paper, Typography } from "@mui/material";

function Card({ title, value, color }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderLeft: `6px solid ${color}`,
      }}
    >
      <Typography color="text.secondary">{title}</Typography>

      <Typography variant="h4" fontWeight={700}>
        {value}
      </Typography>
    </Paper>
  );
}

function StatsCards({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter((t) => t.status === "Pending").length;

  const progress = tasks.filter((t) => t.status === "In Progress").length;

  const completed = tasks.filter((t) => t.status === "Completed").length;

  return (
    <Grid container spacing={3} mb={3}>
      <Grid size={{ xs: 12, md: 3 }}>
        <Card title="Total Tasks" value={total} color="#2563eb" />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card title="Pending" value={pending} color="#f59e0b" />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card title="In Progress" value={progress} color="#0ea5e9" />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card title="Completed" value={completed} color="#22c55e" />
      </Grid>
    </Grid>
  );
}

export default StatsCards;
