const express = require('express')
const app = express()

const errorMiddleware=require("./middleware/error")

app.use(express.json())


//Route Imports
const product=require("./routes/productRoute")

//middleware for error


app.use("/api",product)

app.use(errorMiddleware)


module.exports=app
