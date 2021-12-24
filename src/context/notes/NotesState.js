import noteContext from "./noteContext";
import { useState } from "react";
const NotesState = (props)=>{

const s1 = {
    name:"avi",
    rank:"grandmaster"
}
const [info, setinfo] = useState(s1)

const updateInfo = ()=>{
 setInterval(() => {
    setinfo({
        name:"new",
        rank:"newbie"
    })
 }, 1000);
}

    return(
        <noteContext.Provider value={{info,updateInfo}}>
                {props.children}
        </noteContext.Provider>
    )
}

export default NotesState;