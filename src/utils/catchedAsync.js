//funcion que maneja los errores. 
// si hay error, se captura y se envia al manejador de errores de express. 
module.exports = (controller) => {
    return function(req, res, next) {
        controller(req,res).catch((err)=>{
            next(err);
        })
    }
}