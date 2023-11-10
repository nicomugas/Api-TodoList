const {catchedAsync} = require("../utils");

module.exports = {
    getAllTasks: catchedAsync(require("./taskcontroller/getAllTasks")),
    createTask: catchedAsync(require("./taskcontroller/createTask")),
    updateTask: catchedAsync(require("./taskcontroller/updateTask")),
    deleteTask: catchedAsync(require("./taskcontroller/deleteTask")),
    registerUser: catchedAsync(require("./usercontroller/register")),
    loginUser:  catchedAsync(require("./usercontroller/login")),
}