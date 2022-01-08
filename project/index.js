var express = require("express")
var app = express()

var handlebars = require("express3-handlebars").create({defaultLayout : 'main'});

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.get("/",(req,res)=>{
    res.render('home');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.use((req,res)=>{
    res.status(404);
    res.render('notfound');
});

app.listen(app.get('port'),()=>{
    console.log("logged in");
});