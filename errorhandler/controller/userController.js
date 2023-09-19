const errors = require("../utils/errors");
const user = require("../db/usermodel");
const errorHandler = require("../middlewares/ErrorHandler");
const asyncahandling = require("../middlewares/asynchandling");

const newUser = asyncahandling(async(req,res,next) => {
    const userExist = await user.findOne({email : "v@gmail.com" });
    console.log(userExist);
    if(userExist){
        return next(new errors("User already exist", 400));
    }
    await user.create({
        name : "Sidham",
        email : "v@gmail.com"
    });

    res.json({
        message : "New user is created"
    });
    
});
   
   


module.exports = newUser;
