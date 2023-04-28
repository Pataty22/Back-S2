const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/html/home.html")
});

app.get("/productos", (req, res)=>{
    res.sendFile(__dirname + "/html/productos.html")
});

app.get("/sobre-nosotros", (req, res)=>{
    res.sendFile(__dirname + "/html/nosotros.html")
});

app.get("/contacto", (req, res)=>{
    res.sendFile(__dirname + "/html/nosotros.html")
});

app.listen(3000, console.log("el servidor está corriendo en el puerto 3000"));