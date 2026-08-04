function add(a,v){
    return a + v;
}
// console.log(add(4,8));

// module.exports=add; 

async function getdata(){

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res=await data.json();
    return res;

}
// module.exports=getdata;

module.exports={add,getdata};