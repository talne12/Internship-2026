const fs=require("fs");

fs.writeFileSync("abc.pdf","this is write file",(err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data);
});