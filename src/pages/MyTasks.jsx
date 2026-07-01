import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import TaskFilters from "../components/task/TaskFilters";
import TaskTable from "../components/task/TaskTable";
import TaskModal from "../components/task/TaskModal";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

import toast from "react-hot-toast";

function MyTasks() {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("latest");

  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data || []);
    } catch {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    filtered = filtered.filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus = status === "All" || task.status === status;

      const matchPriority = priority === "All" || task.priority === priority;

      return matchSearch && matchStatus && matchPriority;
    });

    switch (sort) {
      case "latest":
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;

      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;

      case "due":
        filtered.sort(
          (a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0),
        );
        break;

      default:
        break;
    }

    return filtered;
  }, [tasks, search, status, priority, sort]);

  const handleOpen = () => {
    setEditingTask(null);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingTask(null);
    setOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, data);
        toast.success("Task Updated");
      } else {
        await createTask(data);
        toast.success("Task Created");
      }

      handleClose();
      loadTasks();
    } catch {
      toast.error("Operation Failed");
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(id);
      toast.success("Task Deleted");
      loadTasks();
    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <DashboardLayout>
      <TaskFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        priority={priority}
        setPriority={setPriority}
        sort={sort}
        setSort={setSort}
        handleOpen={handleOpen}
      />

      <TaskTable
        tasks={filteredTasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <TaskModal
        open={open}
        handleClose={handleClose}
        editingTask={editingTask}
        onSubmit={handleSubmit}
      />
    </DashboardLayout>
  );
}

export default MyTasks;
