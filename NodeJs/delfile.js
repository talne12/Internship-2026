const fs=require('fs')
fs.unlink("xyz.txt",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Deleted");
});