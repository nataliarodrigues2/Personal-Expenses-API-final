const UserController = require('../controllers/user')

class UserView {
  constructor() {
  }

  async create(req, res) {
    const { name, email, password } = req.body

    try {
      const user = await UserController.create(name, email, password)
      res.status(201).json(user)
    } catch (erro) {
      res.status(400).json({ erro: erro.message })
    }
  }

  async login(req, res) {
    const { email, password } = req.body

    try {
      const result = await UserController.login(email, password)
      res.json(result)
    } catch (erro) {
      res.status(401).json({ erro: erro.message })
    }
  }
}

module.exports = new UserView()