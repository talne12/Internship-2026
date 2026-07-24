import React, {useContext} from "react";

import { Themecontext } from "./ColorContext";

export default function Color(){
    const {namee,color,changecolor}=useContext(Themecontext);

    return(
        <>
        <h1 style={{color:color}}>{namee}</h1>
        <button onClick={()=>changecolor("red")} style={{margin:"5px"}}>red</button>
        <button onClick={()=>changecolor("green")} style={{margin:"5px"}}>green</button>
        <button onClick={()=>changecolor("purple")} style={{margin:"5px"}}>purple</button>
        </>
    )

}