const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { getUserByEmail, createUser } = require('../models/user')
const authConfig = require('../config/auth')

class UserController {
  constructor() {
  }

  async create(name, email, password) {
    if (!name || !email || !password) {
      throw new Error('Nome, email e senha são obrigatórios')
    }

    const usuarioExistente = await getUserByEmail(email)
    if (usuarioExistente) {
      throw new Error('Email já cadastrado')
    }

    const passwordCriptografada = await bcrypt.hash(password, 10)
    const user = await createUser(name, email, passwordCriptografada)

    return { id: user.id, name: user.name, email: user.email }
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios')
    }

    const user = await getUserByEmail(email)
    if (!user) {
      throw new Error('Email ou senha inválidos')
    }

    const passwordValida = await bcrypt.compare(password, user.password)
    if (!passwordValida) {
      throw new Error('Email ou senha inválidos')
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      authConfig.jwt.secret,
      { expiresIn: authConfig.jwt.expiresIn }
    )

    return { token }
  }
}

module.exports = new UserController()