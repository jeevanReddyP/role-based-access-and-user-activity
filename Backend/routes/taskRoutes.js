const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  createTask,
  getMyTasks,
  getAllTasks,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");

router.post("/tasks", authMiddleware, createTask);

router.get("/tasks/my", authMiddleware, getMyTasks);

router.get("/admin/tasks", authMiddleware, adminMiddleware, getAllTasks);

router.delete("/admin/tasks/:id", authMiddleware, adminMiddleware, deleteTask);

router.put("/admin/tasks/:id/complete", authMiddleware, adminMiddleware, completeTask);

module.exports = router;