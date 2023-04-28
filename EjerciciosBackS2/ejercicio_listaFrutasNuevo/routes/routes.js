const express = require("express");
const routes = express.Router();

let fruits = ["manzana", "pera", "frutilla"];


routes.get("/frutas", (req,res)=>{ 
   return res.render("frutas", {fruits})
});

routes.post("/frutas", (req,res)=>{
    fruits.push(req.body.newFruit)
    return res.redirect("/frutas")
});

module.exports = routes;