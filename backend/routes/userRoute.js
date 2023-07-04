const express = require("express");
const userRoute = express.Router();
const {register,login} = require("../controller/userController")


              //<----------------to register user--------------->
userRoute.post("/register",register)
               //<----------------to login user--------------->
userRoute.post("/login",login)  


module.exports = userRoute;