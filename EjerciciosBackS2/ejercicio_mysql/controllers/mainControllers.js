const mysql = require("mysql2/promise");
const db = require("../db");

async function usersList(req,res){
    const users = await db.findAll("users");
    res.render("usuarios", {users} );
};

async function addUsers(req,res){
    return res.render("crear");
};


async function modifyUsers(req,res){ 
    const usersM = await db.modify("users", req.params.id);
    return res.render("modificar", {usersM});
};

async function createUsers(req,res){
    let userFirstName = req.body.firstName;
    let userLastName = req.body.lastName;
    let userAge = req.body.age;

   await db.createU("users", `'${userFirstName}', '${userLastName}',${userAge}`);

   res.redirect("http://localhost:3000/usuarios");
        
};

async function modifyUsers1(req,res){
    await db.modU1("users", req.body.firstName, req.body.lastName, req.body.age, req.params.id);
    return res.redirect("http://localhost:3000/usuarios");

};

async function userDelete(req,res){
    
    await db.deletU("users", req.params.id);
    return res.redirect("http://localhost:3000/usuarios");

};

module.exports={
    usersList,
    addUsers,
    modifyUsers,
    createUsers,
    modifyUsers1,
    userDelete
}