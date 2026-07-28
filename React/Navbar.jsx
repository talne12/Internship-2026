import {Link} from "react-router-dom";
import './Navbar.css'
function Navbar(){
    return(
        <>
    <nav>
         <Link to="Home/">Home</Link> { ""}
         <Link to="/Login">About</Link> 
         <Link>Contact</Link>
         <Link>Login </Link>
         <Link>Register</Link>
    </nav>
    </>
    );
}
export default Navbar