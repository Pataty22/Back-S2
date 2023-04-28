const express = require("express");
const routes = express.Router();
const mainController = require("../controllers/controllers");

routes.get('/teams', mainController.index);

routes.get('/teams/:id', mainController.find);

routes.post('/teams', mainController.add);

routes.delete('/teams/:id', mainController.del);

routes.patch('/teams/:id', mainController.change);

module.exports = routes;