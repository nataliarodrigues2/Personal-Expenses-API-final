const { Router } = require('express')
const { fn, col } = require('sequelize')
const { Expense } = require('../models/expense')
const { Category } = require('../models/category')
const autenticar = require('../middlewares/auth')

const router = Router()

// retorna a soma total de todos os valores de despesas de um usuário (ex: R$5.000)
router.get('/total-expenses', autenticar, async (req, res) => {
  try {
    const result = await Expense.sum('value', {
      where: { userId: req.userId }
    })
    return res.status(200).json({ total: result || 0 })
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar total de despesas' })
  }
})

// retorna a quantidade total de despesas de um usuário (ex:5)
router.get('/expenses-count', autenticar, async (req, res) => {
  try {
    const amount = await Expense.count({
      where: { userId: req.userId }
    })
    return res.status(200).json({ amount })
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar amount de despesas' })
  }
})

// retorna o total gasto por categoria (ex: total: 5.000, categoria: alimentação)
router.get('/expenses-by-category', autenticar, async (req, res) => {
  try {
    const result = await Expense.findAll({
      where: { userId: req.userId },
      attributes: ['categoryId', [fn('SUM', col('value')), 'total']],
      include: [{ model: Category, attributes: ['name'] }],
      group: ['categoryId', 'Category.id']
    })
    return res.status(200).json(result)
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar despesas por categoria' })
  }
})

module.exports = router