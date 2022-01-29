var express = require("express"); 
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var opts = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
};
mongoose.connect(credentials.mongoDb.connectString,opts);
var app = express();




function NewsletterSignup(name, email) {
    this.name = name;
    this.email = email;
}



var handlebars = require("express3-handlebars").create({
    defaultLayout: 'main', helpers: {
        section: function (name, options) {
            if (!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //choosing handlesbars as viewengine 
app.set('view cache', true);
app.set('port', process.env.PORT || 3000);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require("express-session")());
app.use(function (req, res, next) {
    res.locals.showTests = app.get("env") !== 'production' && req.query.test === '1';
    next();
});
app.use(function (req, res, next) {
    if (!res.locals.partials) res.locals.partials = {};
    res.locals.partials.data = [
        { name: "Sanjay", age: '19' },
        { name: "Nithin", age: '20' },
        { name: "Ajay", age: 23 }
    ];
    next();
});
app.use(function (req, res, next) {
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});




app.get("/", function (req, res) {
    res.render('home');
});


//page dependent testing
app.get("/about", function (req, res) {
    res.render('about', {
        author: {
            username: "SanjayNithin2002",
            repository: "NodeJS"
        },
        dynamicString: [
            { firstname: "Sanjay", lastname: "Nithin" },
            { firstname: "Ajay", lastname: "Devgan" },
            { firstname: "Ishani", lastname: "Bhavya" },
            { firstname: "Jawahar", lastname: "Prayush" }
        ],
        id: false // change it to true and access {{if ../id}}
    });
});

app.get("/custom-layout", function (req, res) {
    res.render('customLayoutTest', {
        layout: 'custom',
        copyrightYear: '2022'
    });
});

app.get('/data/aja-call-data', function (req, res) {
    res.json({
        type: 'AJAX'
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

app.post("/newsletter", function (req, res) {
    var name = req.body.name || " ", email = req.body.email || " ";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        if (req.xhr) {
            return res.json({ error: "Invalid request" });
        }
        req.session.flash = {
            type: "danger",
            intro: "intro",
            message: "this is a message"
        };
        return res.redirect(303, "/about");
    }
    if (req.xhr) return res.json({ success: true });
    req.session.flash = {
        type: 'success',
        intro: 'thank you',
        message: "Success message"
    };
    return res.redirect(303, "/about");
});

app.use(function (req, res) {
    res.status(404);
    res.render('notfound');
});


app.listen(app.get('port'), function () {
    console.log("logged in");
});