const app = require("./app");
const connectDatabase = require("./config/db");
const dotenv=require("dotenv")

// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error:${err.message}`)
  console.log(`Shutting down the server due to uncaught Exception`)
  process.exit(1)
})



// Config
dotenv.config({path:"./config/config.env"});

// Connecting to database
connectDatabase();


const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});



//unhandled promise rejection
process.on("unhandledRejection",err=>{
  console.log(`Error:${err.message}`)
  console.log(`Shutting down the server due to unhandled Promise Rejection`)

  server.close(()=>{
    process.exit(1)
  })
})