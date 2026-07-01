import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

function TaskModal({ open, handleClose, onSubmit, editingTask }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editingTask) {
      reset(editingTask);
    } else {
      reset({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
      });
    }
  }, [editingTask, reset]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{editingTask ? "Edit Task" : "Create Task"}</DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Title" {...register("title")} required />

            <TextField
              label="Description"
              multiline
              rows={4}
              {...register("description")}
            />

            <TextField
              select
              label="Status"
              defaultValue="Pending"
              {...register("status")}
            >
              <MenuItem value="Pending">Pending</MenuItem>

              <MenuItem value="In Progress">In Progress</MenuItem>

              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>

            <TextField
              select
              label="Priority"
              defaultValue="Medium"
              {...register("priority")}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </TextField>

            <TextField
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              label="Due Date"
              {...register("dueDate")}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button variant="contained" type="submit">
            {editingTask ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default TaskModal;
