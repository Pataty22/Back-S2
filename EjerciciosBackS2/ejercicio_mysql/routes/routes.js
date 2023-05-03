const express = require("express");
const routes = express.Router();
const mainController = require("../controllers/mainControllers");


routes.get("/usuarios", mainController.usersList);

routes.get("/usuarios/crear", mainController.addUsers);

routes.get("/usuarios/editar/:id", mainController.modifyUsers );

routes.post("/usuarios", mainController.createUsers);

routes.post("/usuarios/editar/:id", mainController.modifyUsers1);

routes.get("/usuarios/eliminar/:id", mainController.userDelete);


module.exports = routes;