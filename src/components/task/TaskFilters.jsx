import { Button, MenuItem, Stack, TextField } from "@mui/material";

function TaskFilters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  sort,
  setSort,
  handleOpen,
}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      mb={3}
      justifyContent="space-between"
      flexWrap="wrap"
    >
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <TextField
          placeholder="Search..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TextField
          select
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={{ width: 170 }}
        >
          <MenuItem value="All">All Status</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </TextField>

        <TextField
          select
          size="small"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          sx={{ width: 170 }}
        >
          <MenuItem value="All">All Priority</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>

        <TextField
          select
          size="small"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          sx={{ width: 170 }}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="due">Due Date</MenuItem>
        </TextField>
      </Stack>

      <Button variant="contained" onClick={handleOpen}>
        + Add Task
      </Button>
    </Stack>
  );
}

export default TaskFilters;
