const jwt = require('jsonwebtoken')

// middleware para validar token y proteger rutas.
const verifyToken = (req, res, next) => {
    const token = req.header('authtoken')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified
        next() 
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;