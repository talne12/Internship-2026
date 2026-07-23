import {createContext} from "react";
import ContextRest from "./Components/ContextRest";

export const UseContextt=  createContext();
export default function Context()
{

    const name="user2"

    return(
        <UseContextt.Provider value={name}>
            <ContextRest/>
        </UseContextt.Provider>
    )
}









// create Context /**method ahe
// provider method

// create use context name same rehna chaiye dusre file mai acccse3ss karna isliye export lkiya  
// vo probide data>