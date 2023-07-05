const express=require("express")
const theaterRouter=express.Router()
const {  addTheater, getTheater, getOneTheater, searchTheater } = require("../controller/theaterController")
const { authenticate } = require("../middleware/authenticate")


theaterRouter.post("/add",authenticate,addTheater)

theaterRouter.get("/allTheater",getTheater)
theaterRouter.get("/oneTheater/:theaterId",getOneTheater)
theaterRouter.get("/search",searchTheater)

module.exports={theaterRouter}