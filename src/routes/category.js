const { Router } = require('express')
const view = require('../views/category')
const autenticar = require('../middlewares/auth')

const router = Router()

router.get('/', autenticar, (req, res) => view.getAll(req, res))
router.get('/:id', autenticar, (req, res) => view.getById(req, res))
router.post('/', autenticar, (req, res) => view.create(req, res))
router.put('/:id', autenticar, (req, res) => view.update(req, res))
router.delete('/:id', autenticar, (req, res) => view.delete(req, res))

module.exports = router