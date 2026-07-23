import react, { useContext } from 'react';
import { UseContextt } from '../Context';

export default function ContextRest(){
    const name=useContext(UseContextt)
   
    return(
        <>
       <h2>Namme:{name}
        </h2>; 
        </>
    )
}