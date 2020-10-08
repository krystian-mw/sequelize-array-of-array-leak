"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const randomString = () => Math.random().toString();

    for (let index = 0; index < 100000; index++) {
      console.clear();
      console.log("Uploading", index, "of", 100000);
      console.log("Progress:", `${(index / 100000) * 100}%`);
      await queryInterface.bulkInsert(
        "sample_user",
        [
          {
            username: `user_sample_${index}`,
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
          },
        ],
        {}
      );
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sample_user", null, {});
  },
};
