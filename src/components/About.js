import React ,{useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

 const About = () => {

const a = useContext(noteContext)

useEffect(() => {
   
    a.updateInfo();
   
}, [])

    return (

        <div>
            this is about {a.info.name}  agent whose rank is {a.info.rank}
        </div>
    )
}
export default About;