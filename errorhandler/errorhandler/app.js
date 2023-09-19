// const express = require("express");
// const app = express();

// class ErrorHandler extends Error{
//     constructor(message,statuscode){
//          super(message);
//          this.statuscode = statuscode;
//     }
// }

// app.get("/",(req,res,next)=>{
//     console.log("A");
//     //we can set the custom error like this-->
//     return next(new ErrorHandler("Not Found",404));

//     // next();
// }, (req,res,next) => {
//     console.log("B");
    
// }, (req,res,next) => {
//     console.log("C");
// });



// //it is error handler 
// app.use((err,req,res,next)=>{
//     err.statuscode = err.statuscode;
//     err.message = err.message;
//     res.status(err.statuscode).json({
//         message :err.message
//     })
// })

// app.listen(3000,()=>{
//     console.log("Server is running on 3000 port number");
// });