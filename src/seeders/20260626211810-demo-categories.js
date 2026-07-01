'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Alimentação',
        description: 'Gastos com comida e bebida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Transporte',
        description: 'Gastos com transporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saúde',
        description: 'Gastos com saúde e medicamentos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};