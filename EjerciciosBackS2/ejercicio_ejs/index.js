const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    const today = new Date();
    const dayNumber = today.getDay();
    let message = " ";
    if(dayNumber === 0 || dayNumber === 6){
        message = "Fin de semana";
    }else {
        message = "Día de semana";
    }
    res.render("home", {message});
});

app.get("/productos", (req,res)=>{
    res.render("productos", {stock:["impresora", "monitor", "mouse", "teclado"]});
});

/*app.get("/productos", (req,res)=>{
    const productos = ["impresora","mouse","teclado","monitor"]
    res.render("productos", {productos});
}); ESTO ES LO MISMO QUE EL APP DE ARRIBA, SOLO QUE CON EL OBJETO PASADO A VARIABLE ANTES*/

app.get("/sobre-nosotros", (req,res)=>{
    res.render("sobre-nosotros");
});

app.get("/contacto", (req,res)=>{
    res.render("contacto");
});

app.listen(port, ()=> console.log(`http://localhost:${port}`));