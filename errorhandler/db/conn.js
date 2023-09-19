const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

mongoose.connect("mongodb://127.0.0.1:27017/errorcheck")
.then(() => {
    console.log("Database is connected!!");
})
.catch((e) => {
    console.log(e);
})