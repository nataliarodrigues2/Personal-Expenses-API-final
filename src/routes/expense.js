const { Router } = require('express')
const { Expense } = require('../models/expense')
const view = require('../views/expense')
const autenticar = require('../middlewares/auth')

const router = Router()

router.get('/', autenticar, (req, res) => view.getAll(req, res))

// corrigida por que não estava rodando no postman
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

router.get('/:id', autenticar, (req, res) => view.getById(req, res))
router.post('/', autenticar, (req, res) => view.create(req, res))
router.put('/:id', autenticar, (req, res) => view.update(req, res))
router.delete('/:id', autenticar, (req, res) => view.delete(req, res))

module.exports = router
