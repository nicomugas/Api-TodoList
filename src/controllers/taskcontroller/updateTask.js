const { response } = require("../../utils");
const { updateTask } = require("../../services");

//actualizar tarea. Cualquiera de los campos.
module.exports = async (req, res) => {
  const { id} = req.params;
  const { title, description, isCompleted } = req.body;
  const taskUpdate = await updateTask(title, description, id, isCompleted);
  response(res, 201, {
    message: "task was updated",
    taskUpdate
});
};
