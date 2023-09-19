const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter valid name!!"]
    },
    email : {
        type : String,
        required : [true, "Please enter valid name!!"],
        unique : true
    }
});

const usermodel = mongoose.model("expresserror",userSchema);

module.exports = usermodel;