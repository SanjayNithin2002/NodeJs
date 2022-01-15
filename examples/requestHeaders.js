var express = require("express");
var app = express();

app.set('port',process.env.PORT || 3000);

app.get("/",function(req,res){
    res.set({"Content-Type": "text/plain"});
    var str = " ";
    for(var i in req.headers){
        str += i + ":" + req.headers[i] + "\n";
    }
    res.send(str);
});

app.get("/request",function(req,res){
    console.log(req.query); //holds the name value pairs. Used to get parametrs of query string.
});

app.post("/body",function(req,res){
    console.log(req.body); //name value pairs of the html.Used in form processing.Used with post methods.
});

app.listen(app.get('port'),function(req,res){
    console.log("logged in");
});