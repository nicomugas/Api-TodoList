const { response } = require("../../utils");


const {getTask} = require("../../services")
// listar tareas de usuario. Se paginan resultados y se ordenan por titutlo.

module.exports = async (req, res) => {
  const id = req.user.id
  
  const order = req.query.order || "asc"; //recibo forma de ordenar resultados ASC o DESC
  const page = req.query.page || 1; //recibo la pagina que quiero mostrar.
  

  const tasks = await getTask(order, page, id)
  response(res, 200, {
    tasks, //retorno data
 
  });
};
