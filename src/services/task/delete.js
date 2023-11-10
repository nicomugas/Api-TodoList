const { TaskSchema } = require("../../database");

//eliminar tarea.
module.exports = async (idtask) => {
  const deleteTask =  await TaskSchema.deleteOne({ _id: idtask });
  return deleteTask;
};
