const  express = require("express");
const router = express.Router();
const newUser = require("../controller/userController.js");

router.get("/",(req,res) => {
    res.status(200).json({
        message : "Hello user"
    })
});

router.get("/newuser",newUser);



module.exports = router;