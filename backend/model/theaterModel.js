const mongoose = require('mongoose');

// <<-------------------------theaterSchema--------------->>
const theaterSchema = mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false
});

//<<-------------------------theaterModel--------------->>
const theaterModel = mongoose.model("theater",theaterSchema);

module.exports = {
    theaterModel
}