const express =require("express");

const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
dotenv.config();
app.use(express.json())

mongoose.set('strictQuery', false);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
    app.use("/api/auth",authRoute)
    app.use("/api/users",userRoute)



app.listen("5001",()=>{

    console.log("backend is running ");
});