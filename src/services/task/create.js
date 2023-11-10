const { TaskSchema } = require("../../database");

//registrar tarea.
module.exports = async (title, description, iduser, iscompleted) => {
  const task = await TaskSchema.create({
    title: title,
    description: description,
    iduser: iduser,
    isCompleted: iscompleted,
  });
  return task;
};
