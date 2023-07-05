const express=require("express");
const { addCart, getCart, deleteItem } = require("../controller/cartController");
const { CartModel } = require("../model/cartModel");
const cartRouter=express.Router();


cartRouter.post("/add/:movieId",addCart)
cartRouter.get("/get",getCart)
cartRouter.delete("/remove/:_id",deleteItem)
// cartRouter.get("/get",async(req,res)=>{
//     const {userId}=req.body
//     try {
//         const find=await CartModel.find({userId});
//         res.send(find)
//     } catch (error) {
//         console.log(error)
//     }
// })

module.exports={
    cartRouter
}