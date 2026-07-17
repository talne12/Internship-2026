import react, {useState} from "react";
import Child from "./Child"
export default function Usestate() {
    const[num,setNum]=useState(1);
    const name="Anjali"

    function add() {
        setNum(num+1);
    }

    function min(){
        setNum
        (num-1)
    }

    function mul() {
        setNum(num*2)
    }

    function div() {
        setNum(num/2)
    }   

    return(
        <>
        <h1>{num}</h1>
        <button onClick={add} style={{ margin: '5px', color: 'blue', backgroundColor: 'red' }}>+</button>
        <button onClick={min} style={{ margin: '5px' , backgroundColor: 'purple'}}>-</button>
        <button onClick={mul} style={{ margin: '5px' , backgroundColor: 'blue'}}>*</button>
        <button onClick={div} style={{ margin: '5px' , backgroundColor: 'pink'}}>/</button>
        <Child send={name} />
        </>
    )
}