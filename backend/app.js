const express = require('express')
const app = express()
const cors=require("cors")

const cookieParser = require('cookie-parser')
const bodyParser=require("body-parser")
const fileUpload=require("express-fileupload")


const errorMiddleware=require("./middleware/error")

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({useTempFiles:true}))

//Route Imports
const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
const order=require("./routes/orderRoute")
const cart=require("./routes/cartRoute")
//middleware for error

app.get("/",(req,res)=>{
    let initialData=`Welcome to day2day app backend 🥳.`
    res.send(initialData)
})


app.use("/api",product)
app.use("/api",user)
app.use("/api",order)
app.use("/api",cart)




app.use(errorMiddleware)


module.exports=app
