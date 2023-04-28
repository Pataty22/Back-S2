const express = require("express");
const routes = express.Router();
const mainController = require("../Controllers/mainControllers");


routes.get("/", mainController.getArticles);

routes.get("/articulos/:id", mainController.art);

module.exports= routes;