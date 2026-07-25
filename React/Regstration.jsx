import React, { useState } from "react";

export default function Registration(){
    const[data,setdata]=useState({
        name:"",
        email:"",
        Contact:"",
        Password:""
    });

    const [submitdata,setsubmitdata]=useState(null)

    const handlechange=(e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
    }); 
    };

    const handlesubmit=(e)=>{
        e.preventDefault();
        setsubmitdata(data);

        setdata({
            name:"",
            email:"",
            Contact:"",
            Password:""
        });
    };

    return(
        <div style={{padding:"20px", backgroundColor:"danger"}}>
            <h1>Registration Form</h1>
            <form onSubmit={handlesubmit}>

                <input type="text"
                name="name"
                placeholder="Enter name"
                value={data.name}
                onChange={handlechange}
            />
     <br/><br/>
            <input type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handlechange}
            />
     <br/><br/>
            <input type="text"
            name="Contact"
            placeholder="Enter Contact number"
            value={data.Contact}
            onChange={handlechange}
            />
     <br/><br/>
            <input type="Password"
            name="Password"
            placeholder="Enter Password"
            value={data.Password}
            onChange={handlechange}
            />
    <br/><br/>
            <button type="submit">Register</button>
            <br/>
            
            </form>

            {
                submitdata &&(
                    <div style={{marginTop:"20px"}}>
                        <h3>Submitted data</h3>
                        <p><strong>Name:</strong>{submitdata.name}</p>
                        <p><strong>Email:</strong>{submitdata.email}</p>
                        <p><strong>Contact:</strong>{submitdata.Contact}</p>
                        <p><strong>Password</strong>{submitdata.Password}</p>
                    </div>
                )
            }
            
        </div>
    );
}