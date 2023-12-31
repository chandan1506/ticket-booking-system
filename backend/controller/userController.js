const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const {UserModel} = require("../model/UserModel");
// const {authenticate} = require("../middleware/authenticate")


              //<----------------to register user--------------->
const register =  async (req, res) => {
    const { name,password,email } = req.body;
    const data = await UserModel.findOne({email})
    if(data){
        res.json({"message":"User is already Registered"})
    }else{
      try {
        bcrypt.hash(password, 5, async(err, hash) => {
          // Store hash in your password DB.
          if(err){
              res.json(err)   
          }
          else{
            const new_user = new UserModel({
              name,
              email,
              password: hash,
            });
           await new_user.save();
            res.json({"message":"User is Registered"});
          }
         
        });
      } catch (error) {
        console.log(error.message);
        res.json({"message":"Something went wrong please try again"});
      }
    }
  };

  
   //<----------------to login user--------------->
  const login =  async (req, res) => {
    const { email, password } = req.body;
    // console.log(email)
    try {
      const user = await UserModel.find({ email });
      // console.log(user)
      if (user.length > 0) {
        bcrypt.compare(password, user[0].password, (err, result) => {
          if (result) {
            const token=jwt.sign({userID:user[0]._id, name: user[0].name}, process.env.key)
            res.json({"message":"login successfull", "token": token})
          } else {
            res.json({"message":"wrong Credentials"});
          }
        });
      } else {
        res.json({"message":"cannot login"});
      }
    } catch (error) {
      res.json(error.message);
    }
  };

module.exports = {register,login}  