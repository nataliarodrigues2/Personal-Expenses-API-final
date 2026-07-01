const { User } = require('./user')
const { Category } = require('./category')
const { Expense } = require('./expense')


// relacionamentos

User.hasMany(Expense, { foreignKey: 'userId' })
Expense.belongsTo(User, { foreignKey: 'userId' })

Category.hasMany(Expense, { foreignKey: 'categoryId' })
Expense.belongsTo(Category, { foreignKey: 'categoryId' })