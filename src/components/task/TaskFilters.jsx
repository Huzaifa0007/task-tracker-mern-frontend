import { Button, MenuItem, Stack, TextField } from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
      direction={{
        xs: "column",
        lg: "row",
      }}
      spacing={3}
      justifyContent="space-between"
      alignItems={{
        xs: "stretch",
        lg: "center",
      }}
      mb={4}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
        flexWrap="wrap"
      >
        <TextField
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{
            minWidth: 280,
            bgcolor: "#fff",
            borderRadius: 2,
          }}
        />

        <TextField
          select
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={{
            width: 180,
            bgcolor: "#fff",
          }}
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
          sx={{
            width: 180,
            bgcolor: "#fff",
          }}
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
          sx={{
            width: 180,
            bgcolor: "#fff",
          }}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
          <MenuItem value="due">Due Date</MenuItem>
        </TextField>
      </Stack>

      <Button
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleOpen}
        sx={{
          px: 4,
          py: 1.2,
          borderRadius: 3,
          fontWeight: 700,
          textTransform: "none",
          boxShadow: 4,
          "&:hover": {
            boxShadow: 8,
            transform: "translateY(-2px)",
          },
        }}
      >
        Add Task
      </Button>
    </Stack>
  );
}

export default TaskFilters;
