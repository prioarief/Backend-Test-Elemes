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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Math",
          updatedAt: new Date(),
          updatedAt: new Date(),
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
