                                //<----------------express--------------->
const express = require("express");
const app = express();
app.use(express.json());

                              //<----------------dotenv--------------->
require('dotenv').config();

                              //<------------connection----------->
const connection = require("./config/db");


                             //<----------cors---------------------->
const cors = require('cors');
app.use(cors());

                            //<-----------routes-------------------->//
const userRoute = require("./routes/userRoute");
const {theaterRouter} = require("./routes/theaterRoute")
const {movieRouter} = require("./routes/movieRoute")
const {ticketRouter} = require("./routes/ticketRoute")
const {cartRouter} = require("./routes/cartRoute")


                         //-<----------middleware----------------------->
const { authenticate } = require("./middleware/authenticate")                         
app.use("/users", userRoute);
app.use("/theater",theaterRouter)
app.use("/movie",authenticate,movieRouter)
app.use("/ticket",authenticate,ticketRouter)
app.use("cart",authenticate,cartRouter)
                        //-<--------server------------------------->
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log('Connected to the DB Successfully.');
    } catch (error) {
        console.log('Something went wrong ' + error);
    }
    console.log(`Server is running at the port ${process.env.port}`);
});

