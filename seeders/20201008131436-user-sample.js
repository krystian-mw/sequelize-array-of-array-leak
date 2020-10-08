"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randomString = () => Math.random().toString();

    await queryInterface.bulkInsert(
      "user",
      [0, 1, 2, 3, 4].map((i) => ({
        username: `user_sample_${i}`,
        data: [
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
        ],
      })),
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user", null, {});
  },
};
