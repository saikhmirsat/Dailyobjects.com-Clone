const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Carts = require("../models/cartmodel");
const ErrorHandler = require("../utils/errorhandler");


// create product
exports.createCart = catchAsyncErrors(async (req, res, next) => {

  const { title, price, discounted_price, image_url, quantity } = req.body;

  let actualprice=price*quantity;

  const cart = await Carts.create({
    title,
    price:actualprice,
    discounted_price,
    image_url,
    user: req.user._id,
    quantity
  });

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    cart,
  });
});


//get cart for logged in user
exports.getCart = catchAsyncErrors(async (req, res, next) => {

  const cartsCount = await Carts.countDocuments();

  const cart = await Carts.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    cart,
    cartsCount
  });
});

//delete cart for logged in user
exports.deleteCart = catchAsyncErrors(async (req, res, next) => {

  const itemincart = await Carts.findById(req.params.id);

  console.log(itemincart);

  if (!itemincart) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  await itemincart.remove();

  res.status(200).json({
    success: true,
  });
});


// exports.changeCartPrice=catchAsyncErrors(async(req,res,next)=>{

//   const id=req.parms.id

//   if(!id){
//     return next(new ErrorHandler("Please pass the order id in params"))
//   }


// })