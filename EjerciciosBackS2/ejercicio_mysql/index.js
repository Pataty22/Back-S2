const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/usuarios", async function usersList(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});
   

    const [users] = await connection.execute("SELECT * FROM users");

    res.render("usuarios", {users});

});

app.get("/usuarios/crear", async function addUsers(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});

    return res.render("crear");

});

app.get("/usuarios/editar/:id", async function modifyUsers(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});
    
    const [edit] = await connection.execute(`SELECT * FROM users WHERE id = ${req.params.id}`);
    return res.render("modificar", {edit});

});

app.post("/usuarios", async function modifyUsers(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});
    
    let userFirstName = req.body.firstName;
    let userLastName = req.body.lastName;
    let userAge = req.body.age;
   
   await connection.execute(`INSERT INTO users (firstname, lastname, age) VALUES( '${userFirstName}', '${userLastName}', ${userAge})`)
   

   res.redirect("http://localhost:3000/usuarios");
        
});
    /*const connection   = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});

    return res.render("crear");*/

app.post("/usuarios/editar/:id", async function modifyUsers(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});
    

    //await connection.execute(`UPDATE 'ha_ejercio_20' SET firstname = ${}, lastname = ${} , age = ${} WEHERE id = ${req.params.id}`)
    return res.redirect("modificar");

});

app.get("/usuarios/eliminar/:id", async function modifyUsers(req,res){
    const connection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"50137667",
    database:"ha_ejercio_20",});

    return res.render("usuarios");

});


app.listen(port, ()=>console.log(`http://localhost:${port}`));




