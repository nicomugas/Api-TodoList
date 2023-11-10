const {UserSchema} = require("../../database");
const bcrypt = require("bcrypt");

//registrar usuario.  
module.exports =async (user, password)=> {    
    //encriptar contraseña
    const salt = await bcrypt.genSalt(5);
    const pass= await bcrypt.hash(password, salt)
  
   await UserSchema.create( {
        user: user,
        password: pass
        })    
}