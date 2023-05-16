const User = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.find();

  return res.render("users/showAll", { users });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// guarda el usuario creado-
async function store(req, res) {
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  };

  await newUser.save();

  return res.redirect("/usuarios");
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
