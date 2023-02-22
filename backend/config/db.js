const mongoose = require("mongoose");

mongoose.set('strictQuery', false)

const connectDatabase = () => {
  mongoose
    .connect(process.env.Mongodb_URL)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
};

module.exports = connectDatabase;
