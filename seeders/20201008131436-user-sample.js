"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randomString = () => Math.random().toString();

    let arrs = [];
    for (let index = 0; index < 100000; index++) {
      arrs.push({
        username: `user_sample_${i}`,
        data: [
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
          [randomString(), randomString(), randomString()],
        ],
        createdAt: new Date().toUTCString(),
        updatedAt: new Date().toUTCString(),
      });
    }

    await queryInterface.bulkInsert("sample_user", arrs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sample_user", null, {});
  },
};
