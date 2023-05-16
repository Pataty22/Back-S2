const User = require("../models/User");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.find();

  return res.render("users/showAll", { users });
}

//async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  return res.render("users/create");
}

// guarda el usuario creado-
async function store(req, res) {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  });

  await newUser.save();

  return res.redirect("/usuarios");
}

async function edit(req, res) {
  const user = await User.findById(req.params.id);

  return res.render("users/edit", { user });
}

async function update(req, res) {
  const id = req.params.id;

  await User.updateOne(
    { _id: id },
    {
      firstaname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
    },
  );

  return res.redirect("/usuarios");
}

async function destroy(req, res) {
  const id = req.params.id;
  await User.deleteOne({ _id: id });

  return res.render("users/showAll");
}

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
