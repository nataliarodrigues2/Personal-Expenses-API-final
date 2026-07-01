const CategoryController = require('../controllers/category')

class CategoryView {
  constructor() {
  }

  async getAll(req, res) {
    const categories = await CategoryController.getAll()
    res.json(categories)
  }

  async getById(req, res) {
    const id = Number(req.params.id)
    const category = await CategoryController.getById(id)

    if (!category) {
      return res.status(404).json({ erro: 'Categoria não encontrada' })
    }

    res.json(category)
  }

  async create(req, res) {
    const { name, description } = req.body

    try {
      const category = await CategoryController.create(name, description)
      res.status(201).json(category)
    } catch (erro) {
      res.status(400).json({ erro: erro.message })
    }
  }

  async update(req, res) {
    const id = Number(req.params.id)
    const { name, description } = req.body

    try {
      const category = await CategoryController.update(id, name, description)
      if (!category) {
        return res.status(404).json({ erro: 'Categoria não encontrada' })
      }

      res.json(category)
    } catch (erro) {
      res.status(400).json({ erro: erro.message })
    }
  }

  async delete(req, res) {
    const id = Number(req.params.id)
    const result = await CategoryController.delete(id)

    if (result === null) {
      return res.status(404).json({ erro: 'Categoria não encontrada' })
    }

    res.status(204).send()
  }
}

module.exports = new CategoryView()