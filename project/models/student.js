var mongoose = require("mongoose");
var studentSchema = mongoose.Schema({
    name : String,
    regNo : String,
    Department : String,
    Email : String,
    about : String,
    dob : Date
});

var Student  = mongoose.model("Student",studentSchema);
module.exports = Student;