const bcrypt = require("bcrypt");

//valida que el password sea correcto
module.exports = async (password, logUserPass) => {
    const result =  await bcrypt.compare(password, logUserPass);
    return result
};
