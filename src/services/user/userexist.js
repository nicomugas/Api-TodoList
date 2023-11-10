const { UserSchema } = require("../../database");

//valida si existe usuario
module.exports = async (user) => {
  const existUser = await UserSchema.findOne({ user: user });
  if (existUser) return existUser;
};
