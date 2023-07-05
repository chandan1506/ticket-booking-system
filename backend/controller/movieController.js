const { TheaterModel } = require("../model/theaterModel");
const { MovieModel } = require("../model/movieModel");

require("dotenv").config();

const addMovie = async (req, res) => {
  const { movieName, price, showTime, rating } = req.body;
  const theaterId = req.params.theaterId;
  try {
    const theater = await TheaterModel.findOne({ _id: theaterId });
    let obj = {
      movieName,
      price,
      rating,
      availableSeat: [
        {
          showTime,
          seat: [
            ...new Array(theater.totalSeats).fill("").map((ele, i) => {
                return { seatNo: (i + 1),isBooked:false} 
               }),
          ],
        },
      ],
    };
    const result = await new MovieModel(obj);
    const res1 = await result.save();
    
    await TheaterModel.findOneAndUpdate({_id:theaterId},{$push:{movie:res1._id}})
    res.json({ msg: "movie add successfully", res1 });
  } catch (error) {
    console.log(error);
  }
};

const getMovie=async(req,res)=>{
    try {
        const result=await MovieModel.find();
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

const getOneMovie=async(req,res)=>{
    const movieId=req.params.movieId
    try {
        const movie=await MovieModel.findOne({_id:movieId})
        res.send(movie)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
  addMovie,
  getMovie,
  getOneMovie
};

// 64a3f4215d400598d000f80c