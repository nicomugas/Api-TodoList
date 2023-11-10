const { response } = require("../../utils");
const { createTask } = require("../../services");

// crear nueva tarea
module.exports = async (req, res) => {
  const newTask = await createTask(
    req.body.title,
    req.body.description,
    req.user.id,
    req.body.isCompleted
  );
  response(res, 201, newTask);
};
