require("dotenv").config();

async function runAllSeeders() {
  await require("./userSeeder")();
}

runAllSeeders();
