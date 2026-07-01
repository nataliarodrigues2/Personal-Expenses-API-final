const { sequelize } = require('../database/database.js')
const { DataTypes } = require('sequelize')

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

async function getAllCategories() {
  return await Category.findAll()
}

async function getCategoryById(id) {
  return await Category.findByPk(id)
}

async function createCategory(name, description) {
  return await Category.create({ name, description })
}

async function updateCategory(id, name, description) {
  const category = await getCategoryById(id)

  if (!category) {
    return null
  }

  category.name = name
  category.description = description

  await category.save()
  return category
}

async function deleteCategory(id) {
  const category = await getCategoryById(id)

  if (!category) {
    return null
  }

  await category.destroy()
  return null
}

module.exports = { Category, getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory }