const http=require("http");
const slugify = require("slugify");

const server = http.createServer(function(req,res){ 
    console.log(`${slugify("¡Quiero viajar a Bélgica & España! 󰎐󰎼 ", {
        lower: true,
        strict: true,
     })}`
    );    
});
    

const server2 = http.createServer(function(req,res){
    console.log("Alguien accedió al servidor");
    res.end("Respuesta");    
});

server.listen(3005);
server2.listen(8081);