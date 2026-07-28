import {Link} from "react-router-dom";

function Login(){
    return(
        <>
    <form style={{backgroundColor:"white", padding:"20px", margin:"30px", height:"450px ", width:"400px", marginLeft:"350px"}}>
    <h1 style={{color:"violet"}}>Login page</h1><br/>
        <h3>Registration</h3>
    <label for="name">Name:</label> 
    <input type="text" placeholder="enter your name"/><br/><br/>
    < label type="email">Email:</label>
    <input type="email" placeholder="enter Email"></input> <br/><br/>
    <label>Contact:</label>
    <input type="text" placeholder="enter contact number"/><br/><br/>
    <button type="submit">Submit</button>
    </form>
        </>
    );
}

export default Login