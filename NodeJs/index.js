// const addition =require("./src/function")
const {add,getdata} =require("./src/function")

getdata().then((item)=>console.log(item))

// console.log(addition())
console.log(getdata,add(4,8));