const mongoose = require('mongoose');

// <<-------------------------userSchema--------------->>
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false
});

//<<-------------------------userModel--------------->>
const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}