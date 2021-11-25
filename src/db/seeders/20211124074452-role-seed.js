"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Roles', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          role: "Admin",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          role: "User",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Roles', null, {});
     */
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
