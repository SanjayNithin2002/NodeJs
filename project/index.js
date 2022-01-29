var express = require("express"); 
var credentials = require("./credentials.js");
var Student = require("./models/student.js");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect(credentials.mongoDb.connectString,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

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
app.set('port', process.env.PORT || 8080);
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
require('./routes.js')(app);
app.use(function (req, res) {
    res.status(404);
    res.render('notfound');
});
app.listen(app.get('port'), function () {
    console.log("logged in");
});