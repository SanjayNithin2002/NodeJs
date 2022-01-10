var express = require('express')
var app = express()

app.set('port' , process.env.PORT || 3000)

app.get("/",(req,res)=>{
    res.type('tetx/plain');
    res.send("Hey there this is Sanjay Nithin");
});

app.get("/about",(req,res)=>{
    res.type('text/plain');
    res.send("This is the about page");
});
app.use((req,res)=> {
    res.type('text/plain');
    res.status(404)
    res.send("404 - Not Found");
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.type('text/plain');
    res.status(500)
    res.send("500 - Internal Error");
});



app.listen(app.get('port'),()=>{
    console.log("Logged in");
});