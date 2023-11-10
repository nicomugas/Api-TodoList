// funcion que maneja las respuestas de todo el proyecto. 

module.exports = (res, statusCode, data) => {
    res.status(statusCode).json({
        error: false,
        data: data,
    })
}