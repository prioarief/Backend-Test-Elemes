"use strict";
const bcrypt = require("../../utilities/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Users', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          email: "JohnDoe@gmail.com",
          password: bcrypt.hash("rahas!a")
        },
        {
          name: "Doe John",
          email: "DoeJohn@gmail.com",
          password: bcrypt.hash("rahas!a")
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
     * await queryInterface.bulkDelete('Users', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
