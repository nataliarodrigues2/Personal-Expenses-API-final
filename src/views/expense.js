const ExpenseController = require('../controllers/expense')

class ExpenseView {
  constructor() {
  }

  async getAll(req, res) {
    const filters = {
      categoryId: req.query.categoryId,
      status: req.query.status,
      dateInicio: req.query.dataInicio,
      dateFim: req.query.dataFim,
      valueMin: req.query.valueMin,
      valueMax: req.query.valueMax
    }

    const expenses = await ExpenseController.getAll(req.userId, filters)
    res.json(expenses)
  }

  async getById(req, res) {
    const id = Number(req.params.id)
    const expense = await ExpenseController.getById(id, req.userId)

    if (!expense) {
      return res.status(404).json({ erro: 'Despesa não encontrada' })
    }

    res.json(expense)
  }

  async create(req, res) {
    const { description, value, date, status, categoryId } = req.body

    try {
      const expense = await ExpenseController.create(description, value, date, status, categoryId, req.userId)
      res.status(201).json(expense)
    } catch (erro) {
      res.status(400).json({ erro: erro.message })
    }
  }

  async update(req, res) {
    const id = Number(req.params.id)
    const { description, value, date, status, categoryId } = req.body

    try {
      const expense = await ExpenseController.update(id, req.userId, description, value, date, status, categoryId)
      if (!expense) {
        return res.status(404).json({ erro: 'Despesa não encontrada' })
      }

      res.json(expense)
    } catch (erro) {
      res.status(400).json({ erro: erro.message })
    }
  }

  async delete(req, res) {
    const id = Number(req.params.id)
    const result = await ExpenseController.delete(id, req.userId)

    if (result === null) {
      return res.status(404).json({ erro: 'Despesa não encontrada' })
    }

    res.status(204).send()
  }
}

module.exports = new ExpenseView()