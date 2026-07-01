'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        nome: 'Alimentação',
        descricao: 'Gastos com comida e bebida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Transporte',
        descricao: 'Gastos com transporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Saúde',
        descricao: 'Gastos com saúde e medicamentos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};