import react from 'react';

export default function BSpreadChild({fun}){

    function abc(){
        fun(1, 2, 3,4,5)
    }
    return(
        <>
    <button onClick={abc}>Print</button>
        </>
    )
}