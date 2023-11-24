const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) return res.status(403).json({ error: "Acceso denegado" });
  try {
    const bearerToken = bearerHeader.split(" ")[1];
    const verified = jwt.verify(bearerToken, process.env.SECRET_TOKEN);
    req.user = verified;
    next();
  } catch (error) {
    res.status(403).json({ error: "token no es válido" });
  }
};

module.exports = verifyToken;
