import { useState } from "react";
import Contactinfo from "./Contactinfo";

export default function Contactform() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [submittedData, setSubmittedData] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedData(user);
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{backgroundColor: "pink", width: "300pX;"}} >
                <h2>Contact Form</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={user.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={user.phone}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit"   style={{
            backgroundColor: "blue",
            color: "white"}}>Submit</button>
            </form>

            {submittedData && <Contactinfo data={submittedData} />}
        </>
    );
}