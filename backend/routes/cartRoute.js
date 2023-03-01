const express=require("express")
const { createCart, getCart, deleteCart } = require("../controllers/cartController")
const { isAutheticatedUser } = require("../middleware/auth")

const router=express.Router()

router.route("/cart/create").post(isAutheticatedUser,createCart)

router.route("/cart/me").get(isAutheticatedUser,getCart)

router.route("/cart/delete/:id").delete(deleteCart)

module.exports=router