const { response } = require("../../utils");
const {deleteTask} = require("../../services")

//eliminar una tarea
module.exports = async (req, res) => {
  const { id } = req.params;
  const taskdelete = await deleteTask({ _id: id });
  response(res, 201, {
    message: "the task has been deleted",
    idtaskDeleted: id,
    taskdelete
  });
};
