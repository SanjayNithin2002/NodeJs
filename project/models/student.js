var mongoose = require("mongoose");
opts = {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
};
mongoose.connect(credentials.mongoDb.connectString);
var studentSchema = mongoose.Schema({
    name : String,
    regNo : String,
    Department : String,
    Email : String,
    about : String,
    dob : Date
});

var Student  = mongoose.model("Student",studentSchema);
new Student({
    name : "Sanjay",
    regNo : "20bi0150",
    Department : "SITE",
    email : "sanjay.nithin19@gmail.com",
    about : "an enthusiast about technology and future",
    dob : "2002-10-19"
});