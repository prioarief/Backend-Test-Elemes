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
          thumbnail: "https://i.ytimg.com/vi/cVxELmATmOU/sddefault.jpg",
        },
        {
          name: "Math Beginner Course",
          price: 3000000,
          category_id: 2,
          thumbnail:
            "https://5.imimg.com/data5/HF/DC/GLADMIN-37672513/mental-maths-course-500x500.png",
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
