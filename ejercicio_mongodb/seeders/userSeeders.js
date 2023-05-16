const { faker } = require("@faker-js/faker");
const User = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  /**
   * Escribir código del seeder aquí...
   */
  console.log("[Database] Se corrió el seeder de Users.");
};
