const http=require("http");

const port=7000;

const server=http.createServer((req,res)=>{
res.write("Hello");
res.write("Welcome to node js");
res.write("HTTP module");
res.end();
});

server.listen(port,()=>{
    console.log(`server is running on port ${7000}`);
});
