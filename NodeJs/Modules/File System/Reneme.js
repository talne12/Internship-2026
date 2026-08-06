const fs=require("fs");

fs.rename("abcc.pdf","./pranjal/abcc.pdf",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Renamed");
});
