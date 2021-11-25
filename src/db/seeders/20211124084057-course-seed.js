"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Courses', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          name: "Data Science Course",
          price: 5000000,
          category_id: 1,
          thumbnail:
            "https://res.cloudinary.com/dzixosfnz/image/upload/v1637809932/course/kkmnozxi0zerlauyoxws.webp",
          createdAt: Date.now(),
          updatedAt: Date.now(),
        },
        {
          name: "Math Beginner Course",
          price: 3000000,
          category_id: 2,
          thumbnail:
            "https://res.cloudinary.com/dzixosfnz/image/upload/v1637809932/course/kkmnozxi0zerlauyoxws.webp",
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
     * await queryInterface.bulkDelete('Courses', null, {});
     */
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
