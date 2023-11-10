const { TaskSchema } = require("../../database");

//actualizar tarea.
module.exports = async (title, description, idtask, isCompleted) => {
  const updatetask =  await TaskSchema
  .updateOne({_id: idtask}, {$set: {title, description, isCompleted}});
  return updatetask;
};
