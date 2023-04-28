const http=require("http");
const humana = require("./persona");


const server = http.createServer(function(req,res){ 
    console.log(humana);
    res.end(JSON.stringify(humana));
     
});

server.listen(8082);

/*const http = require("http");
const slugify = require("slugify");
const persona = require("./persona");
const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      firstname: slugify(persona.firstname),
      lastname: slugify(persona.lastname),
      age: persona.age,
    })
  );
});

server.listen(8000);*/