'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const senha = await bcrypt.hash('123456', 10);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Natalia',
        email: 'natalia@email.com',
        password: senha,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};