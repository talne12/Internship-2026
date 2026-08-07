const mongoose=require("mongoose");

const express=require("express");

const cors=require("cors");
// it is not depencency which is used to connect front end server to backend 

const app=express();

app.use(cors())  //fronted backend server ko connect karne ke liye use hota hai
// it is not depencency which is used to connect front end server to backend

app.use(express.json())
// it is used to convert data the coming from ui to string format 
// to store in mongodb database


//for connecting to mongodb server/database
mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log(err));

app.listen(3000,()=>{
    console.log("Server is running ");
})