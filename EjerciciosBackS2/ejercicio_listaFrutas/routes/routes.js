const express = require("express");
const routes = express.Router();
const mainControler = require("../mainController/controllers")

routes.get("/", (req,res)=>{
    let frutas = ["manzana", "pera", "frutilla"];
    res.render("frutas", {frutas})
});

routes.post("/", (req,res)=>{
    res.render("frutas")
});


module.exports = routes;