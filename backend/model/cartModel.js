const mongoose = require('mongoose');

// <<-------------------------cartSchema--------------->>
const cartSchema = mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false
});

//<<-------------------------cartModel--------------->>
const cartModel = mongoose.model("cart",cartSchema);

module.exports = {
    cartModel
}