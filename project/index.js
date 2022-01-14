var express = require("express")
var app = express()

var handlebars = require("express3-handlebars").create({ defaultLayout: 'main' });

var dynamicString = "This is written dynamically!!!";

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static("public"));


//internal testing code
//global testing
app.use((req, res, next) => {
    res.locals.showTests = app.get("env") !== 'production' && req.query.test === '1';
    next();
});



app.get("/", (req, res) => {
    res.render('home');
});


//page dependent testing
app.get("/about", (req, res) => {
    res.render('about', {
        dynamicContent: dynamicString,
        pageTestScript: '/Contact'
    });
});


/*
dependency files are added in public/vendor directory.
public/qa directory is created.
The following files are added
tests-global -> for all pages.
tests-{routeName} -> for a specific page.
When test is set to 1 , the test files are executed.
We added a pageTestScript dynamic rendering in main which will execute if we pass a pagetestScript;
and the value is checked by tests-about
if it is contact it is successful
or it a failure.
*/

//New views added to test crosspage-testing

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});
app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

app.use((req, res) => {
    res.status(404);
    res.render('notfound');
});


app.listen(app.get('port'), () => {
    console.log("logged in");
});