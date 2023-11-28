const { TaskSchema } = require("../../database");

// listar tareas de usuario. Se paginan resultados y se ordenan por titutlo.
module.exports = async (order, page, iduser) => {
  
  const orberby = order.toLowerCase()
  let pageSize = 3; // cantidad de registros por pagina.
  const count = await TaskSchema.find({ iduser: iduser }).count();
  const pages = Math.ceil(Number(count) / pageSize);
  const tasks = await TaskSchema.find({ iduser: iduser })
    .sort({ title: orberby })
    .skip(pageSize * Number(page) - pageSize)
    .limit(pageSize);

  const result = {
    tasks,
    current: page,
    pagis: pages,
  };

  return result;
};
