const {response} = require("../../utils")
const {registerUserService, validateExistUser} = require("../../services")

//registrar usuario. 
module.exports =async (req,res)=> {    
    const {user, password} = req.body;

    const existUser = await validateExistUser(user);
    if (existUser) return response(res, 201, {message: "username already exist"});

    await registerUserService(user, password )

    response(res, 201, 
        {message: "user created successfully",        
        user: user 
    });
}