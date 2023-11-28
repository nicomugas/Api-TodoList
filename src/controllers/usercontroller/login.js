const { response } = require("../../utils");
const { validateExistUser, validateCorrectPass } = require("../../services");
const jwt = require("jsonwebtoken");

// loguear a usuario
module.exports = async (req, res) => {
  const { user, password } = req.body;

  //validar si existe usuario.
  const existUser = await validateExistUser(user);
  if (!existUser) return response(res, 400, { message: "User not found" });

  // validar password
  const validPassword = await validateCorrectPass(password, existUser.password);
  if (!validPassword)
    return response(res, 400, { message: "Invalid Password" });

  //crear token
  const token = jwt.sign(
    {
      id: existUser._id,
      user: existUser.user,
    },
    process.env.SECRET_TOKEN
  );

  response(res, 201, {
    message: "successful login",
    id: existUser._id,
    user: existUser.user,
    token //lo paso para prueba. 
  });
};
