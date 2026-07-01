import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function TaskTable({ tasks, handleEdit, handleDelete }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "info";
      default:
        return "warning";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #e5e7eb",
        overflow: "hidden",
      }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "#f8fafc",
            }}
          >
            <TableCell sx={{ fontWeight: 700, width: "20%" }}>Title</TableCell>

            <TableCell sx={{ fontWeight: 700, width: "35%" }}>
              Description
            </TableCell>

            <TableCell sx={{ fontWeight: 700, width: 150 }}>Status</TableCell>

            <TableCell sx={{ fontWeight: 700, width: 120 }}>Priority</TableCell>

            <TableCell sx={{ fontWeight: 700, width: 160 }}>Due Date</TableCell>

            <TableCell
              align="center"
              sx={{
                fontWeight: 700,
                width: 140,
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6}>
                <Box
                  py={8}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography color="text.secondary">
                    No tasks found.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            tasks.map((task) => (
              <TableRow
                hover
                key={task._id}
                sx={{
                  transition: ".2s",

                  "&:hover": {
                    bgcolor: "#fafafa",
                  },

                  "& td": {
                    py: 2.2,
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    verticalAlign: "top",
                  }}
                >
                  {task.title}
                </TableCell>

                <TableCell
                  sx={{
                    verticalAlign: "top",
                  }}
                >
                  <Tooltip title={task.description || "No Description"} arrow>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        wordBreak: "break-word",
                        lineHeight: 1.6,
                      }}
                    >
                      {task.description || "No Description"}
                    </Typography>
                  </Tooltip>
                </TableCell>

                <TableCell>
                  <Chip
                    label={task.status}
                    color={getStatusColor(task.status)}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      px: 0.5,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={task.priority}
                    color={getPriorityColor(task.priority)}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                    }}
                  />
                </TableCell>

                <TableCell>
                  <Box display="flex" gap={1} alignItems="center">
                    <CalendarMonthIcon
                      sx={{
                        fontSize: 18,
                        color: "#64748b",
                      }}
                    />

                    <Typography variant="body2">
                      {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString()
                        : "--"}
                    </Typography>
                  </Box>
                </TableCell>

                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(task)}
                      sx={{
                        bgcolor: "#eff6ff",
                        mr: 1,

                        "&:hover": {
                          bgcolor: "#dbeafe",
                        },
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(task._id)}
                      sx={{
                        bgcolor: "#fef2f2",

                        "&:hover": {
                          bgcolor: "#fee2e2",
                        },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskTable;
