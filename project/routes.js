var main = require("./handlers/main.js");

module.exports = function (app) {
    app.get("/",main.home);
    app.get("/about",main.about);
    app.get("/custom-layout",main.customLayout);
    app.get('/data/aja-call-data',main.ajax_data_call);
    app.get('/tours/hood-river',main.tours_hood_river);
    app.get('/tours/request-group-rate',main.tours_request_group_rate);
    app.post("/newsletter",main.newsletter);
};