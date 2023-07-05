const mongoose = require("mongoose");

// <<-------------------------ticketSchema--------------->>
const ticketSchema = mongoose.Schema(
  {
    userId: { type: "ObjectId", ref: "users" },
    bookingDetails: [
      {
        MovieName: { type: String, required: true },
        Price: { type: Number, required: true },
        location: { type: String },
        showTime: { type: String, required: true },
        seat: [
          {
            seatNo: { type: Number, required: true },
            isBooked: { type: Boolean, default: false },
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
  }
);

// <<-------------------------TicketModel--------------->>
const TicketModel = mongoose.model("ticket", ticketSchema);

module.exports = {
  TicketModel,
};