import react, { useState } from 'react';
import Childd from "./Childd"

export default function Parent() {

    const [users,setusers]=useState(
        {
            username:"abc",email:"abc2gmail.com",password:"1234"
        }
    )
    const send=()=>{
        setusers({
            username:"Anjali",email:"aanjalitalne23@gmail.com",password:"12344"
        }
        )
    }
  return (
    <>
    <button onClick={send}> click me</button>
    < Childd 
    user={users.username}
    useremail={users.email}
    userpass={users.password}  
    />
   </>
    )
}