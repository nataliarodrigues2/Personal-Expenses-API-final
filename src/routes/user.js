const { Router } = require('express')
const view = require('../views/user')

const router = Router()

router.post('/', (req, res) => view.create(req, res))
router.post('/login', (req, res) => view.login(req, res))

module.exports = router