import noteContext from "./noteContext";
import { useState } from "react";
const NotesState = (props)=>{


  const host = 'http://localhost'

// const notesFetched = [
//     {
//       "_id": "66",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase h bota",
//       "description": "dont peak fight",
//       "tag": "General",
//       "date": "1640342226187",
//       "__v": 0
//     },
//     {
//       "_id": "61c5a2fe6fb35befe99fefd0",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342270769",
//       "__v": 0
//     },
//     {
//       "_id": "61c5a2ff6fb35befe99fefd2",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342271766",
//       "__v": 0
//     }
//     ,
//     {
//       "_id": "61c5a2ff6fb35befe99fefd2",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342271766",
//       "__v": 0
//     }
//     ,
//     {
//       "_id": "61c5a2ff6fb35befe99fefd2",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342271766",
//       "__v": 0
//     }
//     ,
//     {
//       "_id": "61c5a2ff6fb35befe99fefd2",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342271766",
//       "__v": 0
//     }
//     ,
//     {
//       "_id": "61c5a2ff6fb35befe99fefd2",
//       "user": "61c18b7d4a0188d6164feb96",
//       "title": "ase nahi hota bhai ",
//       "description": "dilse bura lagata hai bhai",
//       "tag": "General",
//       "date": "1640342271766",
//       "__v": 0
//     }
  
//   ]
const [notes, setnotes] = useState([])

// show notes from db and to ui 
const fetchNotes = async()=>{

  const response = await fetch(`${host}/api/notes/getnotes`,{

    method:'GET',
    headers:{
    
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMThiN2Q0YTAxODhkNjE2NGZlYjk2In0sImlhdCI6MTY0MDM0MjE4Mn0.EK8sJ7NL4NGrU7eF327MOnM-soBRRJD1o__Fw-89HHo'
    }
  });
  const json = await response.json();
  setnotes(json)

}

 

 


// adding notes to db 
  const addNotes = async(title,description,tag)=>{
  

      const response = await fetch(`${host}/api/notes/addnotes`,{
    
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMThiN2Q0YTAxODhkNjE2NGZlYjk2In0sImlhdCI6MTY0MDM0MjE4Mn0.EK8sJ7NL4NGrU7eF327MOnM-soBRRJD1o__Fw-89HHo'
        },
        body:JSON.stringify({title,description,tag})
      });

      const json = await response.json();
      setnotes(notes.concat(json))
   
    }


  
// deleting note from db and ui 
  const deleteNote = async(id)=>{

    const response = await fetch(`${host}/api/notes/delete/${id}`,{
    
      method:'DELETE',
      headers:{
 
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMThiN2Q0YTAxODhkNjE2NGZlYjk2In0sImlhdCI6MTY0MDM0MjE4Mn0.EK8sJ7NL4NGrU7eF327MOnM-soBRRJD1o__Fw-89HHo'
      }
    });
  
    
   const deletedNotes = notes.filter((element)=>{
 
   return  element._id!==id
   })
   setnotes(deletedNotes)

  }


  // updating note from db and ui 
  const editNote = async(id,title,description,tag)=>{
  

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`,{
  
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMThiN2Q0YTAxODhkNjE2NGZlYjk2In0sImlhdCI6MTY0MDM0MjE4Mn0.EK8sJ7NL4NGrU7eF327MOnM-soBRRJD1o__Fw-89HHo'
      },
      body:JSON.stringify({title,description,tag})
    });

    const newNotes = JSON.parse(JSON.stringify(notes))
    // console.log("new notes",newNotes)
    newNotes.forEach(element=>{
      if(element._id===id){
        element.title= title
        element.description= description
        element.tag= tag
        
      }
    })
    setnotes(newNotes)

  }


    return(
        <noteContext.Provider value={{notes,fetchNotes,addNotes,deleteNote,editNote}}>
                {props.children}
        </noteContext.Provider>
    )

    }
export default NotesState;