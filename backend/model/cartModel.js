const mongoose=require("mongoose")

// <<-------------------------cartSchema--------------->>
const cartSchema=mongoose.Schema(
    {
        userId: { type: "ObjectId", ref: "users" },
        cartDetails: [
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
)

// <<-------------------------CartModel--------------->>
const CartModel=mongoose.model("cart",cartSchema)


module.exports={
    CartModel
}