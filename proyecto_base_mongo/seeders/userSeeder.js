const { faker } = require("@faker-js/faker");
const User = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  const users = [];

  for (i = 0; i < 10; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 99 }),
    });
  }

  await User.create(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
