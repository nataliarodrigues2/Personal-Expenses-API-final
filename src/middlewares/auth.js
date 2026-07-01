const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function autenticar(req, res, next) {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não informado' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret)
    req.userId = decoded.id
    next()
  } catch (erro) {
    return res.status(401).json({ erro: 'Token inválido' })
  }
}

module.exports = autenticar