const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/html/home.html")
 });

app.get("/multiplicar", (req, res) => {
    const num1 = req.query.number1;
    const num2 = req.query.number2;
    const resultado = num1 * num2;
    res.send(`El resultado de la multiplicación es: ${resultado}`);
  });

app.listen(5500, console.log("el servidor está corriendo en el puerto 5500"));