import React, { useEffect, useState, useCallback } from "react";

 export default function UseEffect(){
    const[count,setCount]=useState(0);
    const [userdata, setuserdata]=useState([]);

    useEffect(()=>
    {
       // console.log("useEffect hook called");

    async function fetchdata() {
        const data=await fetch("https://jsonplaceholder.typicode.com/users")
        const res=await data.json();
    
    setuserdata(res)    
    }
    fetchdata();
    },[]);

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>
            increment 
        </button>
        {
    userdata.map((users)=>
    <>
    <p>{users.name}</p>
    <p>{users.email}</p>
    </>
    )}
        </div>
    );

}