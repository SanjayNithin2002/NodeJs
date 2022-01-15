var http = require("http"), fs = require("fs");
function servestaticFile(res,path,contentType,responseCode){
    if(!responseCode){
        responseCode = 200;
    }
    fs.readFile( __dirname + path , (err,data)=> {
        if(err){
            res.writeHead(500,{'Content-Type' : 'text/plain'})
            res.end("500 Internal Error");
        }
        else{
            res.writeHead(responseCode,{'Content-Type' : contentType});
            res.end(data);
        }
    });
}

http.createServer(function(req,res){
    var path = req.url.replace((/\/?(?:\?.*)?$/," ")).toLowerCase();
    console.log(path);
    switch(path){
        case "/" :
            servestaticFile(res,"/src/index.html",'text/html');
            break;
        case "/table" :
            servestaticFile(res,"/src/table.html",'text/html');
            break;
        default : 
            servestaticFile(res,"/src/list.html",'text/html',404);
            break;
    }
}).listen(3000);