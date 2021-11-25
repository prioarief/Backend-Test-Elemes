"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('CourseCategories', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "CourseCategories",
      [
        {
          category: "Coding",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          category: "Math",
          updatedAt: Date.now(),
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
     * await queryInterface.bulkDelete('CourseCategories', null, {});
     */
    await queryInterface.bulkDelete("CourseCategories", null, {});
  },
};
