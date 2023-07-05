const mongoose=require("mongoose")

// <<-------------------------theaterSchema--------------->>
const theaterSchema=mongoose.Schema({

    theaterName:{type:String,requred:true},
    location:{type:String,required:true},
    totalSeats:{type:Number,default:0},
    movie:[{type:"ObjectId",ref:"movies"}]

},{
    versionKey:false
})

// <<-------------------------TheaterModel--------------->>
const TheaterModel=mongoose.model("theater",theaterSchema)


module.exports={
    TheaterModel
}

// theaterName:"Mona",
// location:"Patna",
// totalSeats:350,
// movie:[{}]