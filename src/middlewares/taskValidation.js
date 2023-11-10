const {ClientError} = require("../utils/errors")
module.exports = (req, res, next) => {
    const {title, description, isCompleted} = req.body;
    
    if (title && description && isCompleted) return next();
    else throw new ClientError("All fields are required", 401);
};