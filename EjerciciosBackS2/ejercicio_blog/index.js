const express = require("express");
const app = express();
const port = 3000;
const routes = require("./Routes/routes");

app.use(express.json());

app.set("view engine", "ejs");

app.use(routes);



app.listen(port, ()=> console.log(`http://localhost:${port}`));