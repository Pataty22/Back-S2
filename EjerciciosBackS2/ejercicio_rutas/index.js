const http=require("http");


const server = http.createServer(function(req,res){ 
    if(req.url === "/"){
        res.end("HOME")
    }
    if(req.url === "/contacto"){
        res.end("CONTACTO")
    }
    if(req.url === "/productos"){
        res.end("PRODUCTOS")
    }
     
});

server.listen(8083);