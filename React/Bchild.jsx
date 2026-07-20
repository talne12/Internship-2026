import react from 'react';   

export default function Bchild({data}){
    const{ name,address,age,mobi}=data
    return(
        <>
        <h3>This is example of Rest operator </h3>
        <h2>name:{name}</h2>
        <h2>address:{address}</h2>
        <h2>age:{age}</h2>
        <h2>mobile:{mobi}</h2>
        </>
    )
}