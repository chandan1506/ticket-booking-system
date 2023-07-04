const mongoose = require('mongoose');

// <<-------------------------movieSchema--------------->>
const movieSchema = mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false
});

//<<-------------------------movieModel--------------->>
const movieModel = mongoose.model("movie",movieSchema);

module.exports = {
    movieModel
}