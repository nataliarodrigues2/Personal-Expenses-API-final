'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Expenses', [
      {
        description: 'Almoço',
        valor: 35.90,
        data: '2026-06-01',
        status: 'PAGA',
        categoriaId: 1,
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Uber',
        valor: 25.00,
        data: '2026-06-02',
        status: 'PAGA',
        categoriaId: 2,
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Farmácia',
        valor: 80.00,
        data: '2026-06-03',
        status: 'PENDENTE',
        categoriaId: 3,
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Expenses', null, {});
  }
};