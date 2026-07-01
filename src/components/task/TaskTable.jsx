import {
  Card,
  CardContent,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskTable({ tasks, handleEdit, handleDelete }) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography py={5} align="center" color="text.secondary">
                    No tasks found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {tasks.map((task) => (
              <TableRow key={task._id}>
                <TableCell>{task.title}</TableCell>

                <TableCell>
                  <Chip
                    label={task.status}
                    color={
                      task.status === "Completed"
                        ? "success"
                        : task.status === "Pending"
                          ? "warning"
                          : "info"
                    }
                  />
                </TableCell>

                <TableCell>
                  <Chip
                    label={task.priority}
                    color={
                      task.priority === "High"
                        ? "error"
                        : task.priority === "Medium"
                          ? "warning"
                          : "success"
                    }
                  />
                </TableCell>

                <TableCell>
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString()
                    : "-"}
                </TableCell>

                <TableCell align="center">
                  <IconButton onClick={() => handleEdit(task)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => handleDelete(task._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default TaskTable;
