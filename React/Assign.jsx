import React, { useEffect, useState } from "react";

export default function Assign(){
    const[users,setusers]=useState([]);
    const[search,setsearch]=useState("");

    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch(
                 "https://jsonplaceholder.typicode.com/users"
            );
            const data=await response.json();
            setusers(data);
        }
        fetchdata();
    },[]);

    const filteredUsers=users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase()
    ));

    return(
        <div style={{padding:"20px"}}>
            <h2>User List</h2>
            <input type="text"
            placeholder="search user"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            style={{width:"300px", padding:"10px", marginBottom:"20px"}}
            />
        {
            filteredUsers.length>0?(
                filteredUsers.map((user)=>(
                    <div
                     key={user.id}
                     style={{border:"1px solid gray", padding:"10px", marginBottom:"10px", borderRadius:"6px"}}
                     >
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.address.city}</p>
                     </div>
                ))
            ):(
                <h3>No User Found</h3>
            )}
        </div>
    );
}