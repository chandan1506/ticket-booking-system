const { MovieModel } = require("../model/movieModel");
const { TheaterModel } = require("../model/theaterModel");
const { TicketModel } = require("../model/ticketModel");

const book = async (req, res) => {
  const { userId,seatId, theaterId,  seat } = req.body;
  const movieId = req.params.movieId;
  try {
    const theater = await TheaterModel.findOne({ _id: theaterId });
    const movie = await MovieModel.findOne({ _id: movieId });
    let data = {
      MovieName: movie.movieName,
      Price: movie.price,
      location: theater.location,
      seat:[]

    };
    const availableSeat=movie.availableSeat.find((ele)=>ele._id==seatId);
    // console.log(availableSeat)
    data.showTime=availableSeat.showTime
    for(let i=0;i<seat.length;i++){
        data.seat[i]=availableSeat.seat.find((ele)=>{
            if(ele.seatNo==seat[i]){
                return true
            }
        })
        data.seat[i].isBooked=true
    }
    const userData=await TicketModel.exists({userId})
    console.log(data)
    if(!userData){
        const bookTicket = await new TicketModel({userId,bookingDetails:data});
        await bookTicket.save()
    }else{
        await TicketModel.findOneAndUpdate({userId},{$push:{"bookingDetails":data}})
    }

   
    // availableSeat.seat.
    await movie.save()
    res.send(await TicketModel.find({userId}))
  } catch (error) {
    console.log(error);
  }
};


const searchTicket=async(req,res)=>{
let query={}
const {q,name,price,location}=req.body
if(q){
  q.$or=[]
  q.$or.push({movieName:{$regex:`*/${q}*/`,$options:"i"}})
  q.$or.push({price:{$regex:`*/${q}*/`,$options:"i"}})
  q.$or.push({location:{$regex:`*/${q}*/`,$options:"i"}})
}
  try {
    const ticket=await TicketModel.find(query);
    res.send(ticket)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  book,
  searchTicket
};