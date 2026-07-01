require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { sequelize } = require('./database/database')

const app = express()
app.use(express.json())
app.use(cors())

require('./models/associations')

const routerUser = require('./routes/user')
const routerCategory = require('./routes/category')
const routerExpense = require('./routes/expense')
const routerDashboard = require('./routes/dashboard')

app.use('/users', routerUser)
app.use('/auth', routerUser)
app.use('/categories', routerCategory)
app.use('/expenses', routerExpense)
app.use('/dashboard', routerDashboard)

const PORT = 3000

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso!')
    return sequelize.sync()
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch((erro) => {
    console.error('Erro ao conectar no banco de dados:', erro)
  })