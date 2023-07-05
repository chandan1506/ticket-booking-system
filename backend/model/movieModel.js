const mongoose = require("mongoose");

// <<-------------------------movieSchema--------------->>
const movieSchema = mongoose.Schema(
  {
    movieName: { type: String, required: true },
    availableSeat: [
      {
        showTime: { type: String, required: true },
        seat: [
          {
            seatNo: { type: Number, required: true },
            isBooked: { type: Boolean, default: false },
          },
        ],
      },
    ],
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
   
  },{
    versionKey: false,
  }
);

// <<-------------------------MovieModel--------------->>
const MovieModel = mongoose.model("movie", movieSchema);

module.exports = {
  MovieModel,
};

// let obj = {
//   movieName: "KGF",
//   availableSeat: [
//     {
//       showTime: "4 to 6",
//       seat: [
//         {
//           seatNo: 1,
//           isBooked: false,
//         },
//         {
//           seatNo: 2,
//           isBooked: true,
//         },
//       ],
//     },
//   ],
// price:350,
// rating:4
// };
