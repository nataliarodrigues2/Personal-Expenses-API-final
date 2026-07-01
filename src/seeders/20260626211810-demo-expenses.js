'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Expenses', [
      {
        description: 'Almoço',
        value: 35.90,
        date: '2026-06-01',
        status: 'PAGA',
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Uber',
        value: 25.00,
        date: '2026-06-02',
        status: 'PAGA',
        categoryId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Farmácia',
        value: 80.00,
        date: '2026-06-03',
        status: 'PENDENTE',
        categoryId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expenses', null, {});
  }
};