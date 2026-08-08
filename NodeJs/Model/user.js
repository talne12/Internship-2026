const mongoose = require("mongoose")

const usermodel = new mongoose.Schema({
    
    name:String,
    email:String,
    password:Number,
    age:Number,
    city:String
    
})

module.exports = mongoose.model("user",usermodel)