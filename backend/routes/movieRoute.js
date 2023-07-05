const express=require("express")
const movieRouter=express.Router()
const { addMovie, getMovie, getOneMovie } = require("../controller/movieController")
const { authenticate } = require("../middleware/authenticate")


movieRouter.post("/add/:theaterId",authenticate,addMovie)

movieRouter.get("/allMovie",getMovie)

movieRouter.get("/OneMovie/:movieId",getOneMovie)

module.exports={movieRouter}