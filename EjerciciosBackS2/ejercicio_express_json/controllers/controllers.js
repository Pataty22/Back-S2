const {teams} = require("../db");

function index(req,res){
    return res.send(teams)
 };

function find(req,res){
   const idBuscado = req.params.id;
   return res.send(teams[idBuscado])
};


function add(req,res){
   teams[req.body.id]= req.body;
   return res.send(teams);
};

function del(req,res){
   teams[req.params.id]= req.body.id;
   return res.send(teams);
};

function change(req,res){
   teams[req.params.id]= {
		"id": req.body.id,
		"name": req.body.name,
		"flag": req.body.flag,
	}
   return res.send(teams);
};


 module.exports = {
    index,
    find,
    add,
    del,
    change,
 };