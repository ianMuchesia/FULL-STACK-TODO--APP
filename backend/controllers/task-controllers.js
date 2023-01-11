const getAllTasks = (req, res) => {
    console.log("all items")
  res.send("all items");
};
const createTask = (req, res) => {
    console.log("create task")
  res.send("create Task");
};

const getSingleTask = (req, res) => {
    console.log("id")
  const { id } = req.params;
  res.send(id);
};

const updateTask = (req, res) => {
    console.log("update Task")
  res.send("update Task");
};

const deleteTask = (req, res) => {
    console.log("delete task")
  const { id } = req.params;
  res.send(id);
};

module.exports = {
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  createTask
};
