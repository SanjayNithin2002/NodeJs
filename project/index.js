var express = require("express")
var app = express()

var handlebars = require("express3-handlebars").create({defaultLayout : 'main'});

var dynamicString = "This is written dynamically!!!";

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render('home');
});

app.get("/about",(req,res)=>{
    res.render('about',{dynamicContent : dynamicString});
});

app.use((req,res)=>{
    res.status(404);
    res.render('notfound');
});

app.listen(app.get('port'),()=>{
    console.log("logged in");
});