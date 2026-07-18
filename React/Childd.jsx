import react from "react";

export default function Childd({useremail, userpass, user}){
    return(
    <>
    <h1>from parent component</h1>
    <h2>{user}</h2>
    <h2>{userpass}</h2>
    <h2>{useremail}</h2>
    </>
    )
}