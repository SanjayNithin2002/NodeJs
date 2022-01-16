var express = require("express");
var path = require("path");
var formidable = require("formidable");
var bodyParser = require("body-parser");
var jqupload = require('jquery-file-upload-middleware');


var app = express();
app.use(bodyParser());
app.set("port", process.env.PORT || 3000);


app.get("/", function (req, res) {
    res.type("text/html");
    res.sendFile(path.join(__dirname, "lib/fileUpload.html"));
});
app.get("/jqfu", function (req, res) {
    res.type("text/html");
    res.sendFile(path.join(__dirname, "lib/jqfu.html"));
});

app.post("/file-handling", function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) res.send(err);
        console.log("received fields");
        console.log(fields);
        console.log("received files");
        console.log(files);
    });
});

app.post("/fileHandling", function (req, res) {
    jqupload.fileHandler({
        uploadDir: function () {
            return __dirname + '/public/uploads/';
        },
        uploadUrl: function () {
            return '/uploads/' + now;
        },
    })(req, res, next);
});

app.listen(app.get("port"));