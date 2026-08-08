const express = require("express")

const router = express.Router()

const User = require("../Model/user")

router.post("/register",async( req,res)=>{

    try{

        const userdata = new User(req.body)

        await userdata.save();
        
        res.status(201).json({
            sucess:true,
            message:"user rigisterd",
            userdata
        })
    }
    catch (err){
    res.status(500).json({
        sucess:false,
        message:"not registered"
    })
    }
})
module.exports = router