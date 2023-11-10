
module.exports = {
    
    registerUserService: require("./user/register"),
    validateExistUser: require("./user/userexist"),
    validateCorrectPass: require("./user/validatepass"),
    createTask: require("./task/create"),
    updateTask: require("./task/update"),
    deleteTask: require("./task/delete"),
    getTask: require("./task/get"),

    
}