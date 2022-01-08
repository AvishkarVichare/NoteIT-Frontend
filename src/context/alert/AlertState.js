import alertContext from "./alertContext";
import { useState } from "react";

const AlertState = (props)=>{

    const [alert, setalert] = useState(null)
    const showAlert = (type,msg)=>{
        setalert({type,msg})
    }

    setTimeout(() => {
        
        setalert(null)

    }, 2500);


    return(

    <alertContext.Provider value={{alert,setalert,showAlert}}>
        {props.children}
    </alertContext.Provider>

)
}

export default AlertState;