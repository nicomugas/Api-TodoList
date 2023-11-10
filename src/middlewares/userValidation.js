
const {ClientError} = require("../utils/errors")
module.exports = (req, res, next) => {
    const {user, password} = req.body;    
    if (user && password) {
        if (password.length > 4) return next();
        else throw new ClientError("passwords must be more than 4 or more characters", 401);    
    }
    else throw new ClientError("User and password are required", 401);
};