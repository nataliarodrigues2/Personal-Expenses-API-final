const { getAllExpenses, getExpenseById, createExpense, updateExpense, deleteExpense } = require('../models/expense')
const { getCategoryById } = require('../models/category')

class ExpenseController {
  constructor() {
  }

  async getAll(userId, filters) {
    return await getAllExpenses(userId, filters)
  }

  async getById(id, userId) {
    return await getExpenseById(id, userId)
  }

  async create(description, value, date, status, categoryId, userId) {
    if (!description || !value || !date || !categoryId) {
      throw new Error('Descrição, valor e data são obrigatórios')
    }

    const category = await getCategoryById(categoryId)
    if (!category) {
      throw new Error('Categoria não encontrada')
    }

    return await createExpense(description, value, date, status, categoryId, userId)
  }

  async update(id, userId, description, value, date, status, categoryId) {
    return await updateExpense(id, userId, description, value, date, status, categoryId)
  }

  async delete(id, userId) {
    return await deleteExpense(id, userId)
  }
}

module.exports = new ExpenseController()