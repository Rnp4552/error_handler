const express= require("express");
const app = express();
const router = require("./routes/user");
const errorHandler = require("./middlewares/ErrorHandler");
require("./db/conn");
app.use("/user",router);


app.use(errorHandler);
app.listen(3000,()=> console.log("Server is running on 3000 port number"))