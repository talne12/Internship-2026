import react from 'react';
import Bchild from './Bchild';

export default function Arest(){
    const obj={
        name:"anjali",address:"pune", age:"17", mobi:"1234567"
    }
    return(
        <>
        <Bchild data={obj}/>
        </>
    )
}