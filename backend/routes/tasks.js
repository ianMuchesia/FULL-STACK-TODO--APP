const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/task-controllers");
const router = express.Router();

router.get("/", getAllTasks);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/:id", getSingleTask);
router.post("/", createTask);

module.exports = router;
