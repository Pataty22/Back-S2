const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(routes);

app.listen(port, ()=> console.log(`http://localhost:${port}`));