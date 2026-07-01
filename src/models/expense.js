const { sequelize } = require('../database/database.js')
const { DataTypes, Op } = require('sequelize')

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('PENDENTE', 'PAGA'),
    allowNull: false,
    defaultValue: 'PENDENTE'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

async function getAllExpenses(userId, filters) {
  const { Category } = require('./category')
  const where = { userId }

  if (filters.categoryId) where.categoryId = filters.categoryId
  if (filters.status) where.status = filters.status

  if (filters.dateInicio || filters.dateFim) {
    where.date = {}
    if (filters.dateInicio) where.date[Op.gte] = filters.dateInicio
    if (filters.dateFim) where.date[Op.lte] = filters.dateFim
  }

  if (filters.valueMin || filters.valueMax) {
    where.value = {}
    if (filters.valueMin) where.value[Op.gte] = filters.valueMin
    if (filters.valueMax) where.value[Op.lte] = filters.valorMax
  }

  return await Expense.findAll({
    where,
    include: [{ model: Category, attributes: ['id', 'name'] }]
  })
}

async function getExpenseById(id, userId) {
  const { Category } = require('./category')

  return await Expense.findOne({
    where: { id, userId },
    include: [{ model: Category, attributes: ['id', 'name'] }]
  })
}

async function createExpense(description, value, date, status, categoryId, userId) {
  return await Expense.create({ description, value, date, status, categoryId, userId })
}

async function updateExpense(id, userId, description, value, date, status, categoryId) {
  const expense = await Expense.findOne({ where: { id, userId } })

  if (!expense) {
    return null
  }

  expense.description = description
  expense.value = value
  expense.date = date
  expense.status = status
  expense.categoryId = categoryId

  await expense.save()
  return expense
}

async function deleteExpense(id, userId) {
  const expense = await Expense.findOne({ where: { id, userId } })

  if (!expense) {
    return null
  }

  await expense.destroy()
  return null
}

module.exports = { Expense, getAllExpenses, getExpenseById, createExpense, updateExpense, deleteExpense }