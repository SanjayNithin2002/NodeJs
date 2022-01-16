var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
app.use(bodyParser());

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
    res.type("text/html");
    res.sendFile(path.join(__dirname, "lib/index.html"));
});

app.get("/thank-you", function (req, res) {
    res.type("text/plain");
    res.send("Thank you!!!");
});

app.get("/process", function (req, res) {
    res.type("application/json");
    res.send({ success: true });
});
app.post('/process-form', function (req, res) {
    if (req.xhr || req.accepts('json,html') === 'json') {
        res.redirect(303, '/process');
    } else {
        res.redirect(303, '/thank-you');
    }
});

app.listen(app.get("port"));
