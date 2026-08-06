
const fs=require("fs");
fs.appendFile("new.txt","fghjk",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
