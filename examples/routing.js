var http = require("http");
http.createServer(function(req,res){
    var path = req.url.replace((/\/?(?:\?.*)?$/," ")).toLowerCase();
    console.log(path);
    switch(path){
        case "/" :
            res.writeHead(200,{'Content-Type' : "text/plain"})
            res.end("Home");
            break;
        case "/about" :
            res.writeHead(200,{'Content-Type' : "text/plain"})
            res.end("About");
            break;
        default :
            res.writeHead(200,{'Content-Type' : "text/plain"})
            res.end("Not Found");
            break;
    }
}).listen(3000);
