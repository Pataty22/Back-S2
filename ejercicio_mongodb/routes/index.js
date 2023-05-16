const userRoutes = require("./userRoutes");
const publicRoutes = require("./publicRoutes");

module.exports = (app) => {
  app.use("/usuarios", userRoutes);
  app.use("/", publicRoutes);
};
