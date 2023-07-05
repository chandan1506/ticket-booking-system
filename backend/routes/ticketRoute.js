const express=require("express")
const { book, searchTicket } = require("../controller/ticketController")
const ticketRouter=express.Router()


ticketRouter.post("/book/:movieId",book)
ticketRouter.get("/get",searchTicket)

// tickeRouter.get("/allTheater",getTheater)
// tickeRouter.get("/oneTheater/:theaterId",getOneTheater)

module.exports={ticketRouter}