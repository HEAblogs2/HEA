const router = require('express').Router();

const User = require('../models/User');

const bcrypt = require('bcrypt');



//teb3a register 
router.post("/register",async(req,res)=>{
 try{

        const salt = await bcrypt.genSalt(5);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
username: req.body.username,
email: req.body.email,
password: hashedPass,
  });

        const user =await newUser.save();
        res.status(200).json(user);


    }catch(err){
res.status(500).json(err);

    }


})

//for the Login 

router.post('/login',async (req,res)=>{

try{

const user = await User.findOne({username: req.body.username})
!user && response.status(400).json("wrong username")

const validated =await bcrypt.compare(req.body.password, user.password)
!validated && response.status(400).json("wrong password")

response.status(200).json(user)
}catch(err){
    res.status(500).json(err);
}

})


module.exports =router