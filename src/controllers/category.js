const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../models/category')

class CategoryController {
  constructor() {
  }

  async getAll() {
    return await getAllCategories()
  }

  async getById(id) {
    return await getCategoryById(id)
  }

  async create(name, description) {
    if (!name) {
      throw new Error('Nome é obrigatório')
    }

    return await createCategory(name, description)
  }

  async update(id, name, description) {
    if (!name) {
      throw new Error('Nome é obrigatório')
    }

    return await updateCategory(id, name, description)
  }

  async delete(id) {
    return await deleteCategory(id)
  }
}

module.exports = new CategoryController()