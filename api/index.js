const express = require("express");

const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require('multer');

// multer is a middelware for handling a multiple form of data. 
// we use it here for handling the images uploaded 
dotenv.config();
app.use(express.json())


 mongoose.set('strictQuery', false);


mongoose
  .connect(process.env.MONGO_URI,{

   
  })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

  const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"images")
  },filename: (req, file, cb)=>{
cb(null,"hello.jpg")
  }
});
const upload =multer({storage:storage})
//we gonna use the post method to upload a single 
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).send("file has been uploaded")
})

    app.use("/api/auth",authRoute)
    app.use("/api/users",userRoute)
    app.use("/api/posts",postRoute)
    app.use("/api/categories",categoryRoute)



app.listen("5002",()=>{

    console.log("backend is running ");
});