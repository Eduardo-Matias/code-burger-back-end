'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.removeColumn('create-products', 'category')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.createColumn('create-products', {
      category: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  }
}
