import react, { createContext,useState } from 'react';
import Color from './Color';

export const Themecontext=createContext()

export default function Myfun(){

    const [color, setcolor]=useState()

    const namee="anjali"

    function changecolor (newcolor)
    {
        setcolor(newcolor)
    }

    return(
        <Themecontext.Provider value={ {namee,changecolor,color}}>
            <Color/>
        </Themecontext.Provider>
    )
 }