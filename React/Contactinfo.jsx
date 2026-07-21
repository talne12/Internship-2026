import react from 'react';

export default function Contactinfo(props){
    return(
        <>
        <h2> Userinforation</h2>
        <p>name:{props.data.name}</p>
        <p>email:{props.data.email}</p>
        <p>phone:{props.data.email}</p>
        </>
    )
}