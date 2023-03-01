const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  title:{type:String,required:true},
  price:{type:Number,required:true},
  discounted_price:{type: Number, required: true },
  image_url:{type:String,required:true},
  user:{type:String,required:true},
  quantity:{type:Number,required:true},
  createdAt: {type: Date,default: Date.now}
})

module.exports= mongoose.model("cart", cartSchema);


