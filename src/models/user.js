const { sequelize } = require('../database/database.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

async function getAllUsers() {
  return await User.findAll()
}

async function getUserByEmail(email) {
  return await User.findOne({ where: { email } })
}

async function getUserById(id) {
  return await User.findByPk(id)
}

async function createUser(name, email, password) {
  return await User.create({ name, email, password })
}

module.exports = { User, getAllUsers, getUserByEmail, getUserById, createUser };