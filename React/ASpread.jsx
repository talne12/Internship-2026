import react from 'react';
import BSpreadChild from './BSpreadChild'; 
// import useState from 'react';

export default function ASpread(){
    function array(...numbers)
    {
        for(let i in numbers){
            console.log(numbers);
    }
}
    return(
        <>
        ASpread
        <BSpreadChild fun={array}/>
        </>
    )
}
