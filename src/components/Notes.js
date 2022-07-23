import React ,{useContext,useEffect,useRef,useState} from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNotes from './AddNotes';
import alertContext from '../context/alert/alertContext';
import { useNavigate } from 'react-router-dom';


 const Notes = () => {
  const navigate = useNavigate()
  
    const a = useContext(alertContext)
    const n = useContext(noteContext)

    const {showAlert} = a;
    const {notes,fetchNotes,editNote} = n;
   

    const [note, setnote] = useState({id:"",title:"",description:"",tag:""})

useEffect(() => {

  if(!localStorage.getItem('token')){
    navigate('/login')
  }
  else{

    fetchNotes();
    
  }

}, [])

const updateNote = (currNote)=>{
  modalRef.current.click();
setnote({id:currNote._id,title:currNote.title,description:currNote.description,tag:currNote.tag})
// console.log(note)

}

const onChange = (e)=>{
setnote({...note,[e.target.name]:e.target.value})
// console.log(note)
}

const handleSaveChanges = ()=>{

  // console.log(note)
  setnote(note)
  editNote(note.id,note.title,note.description,note.tag)
  closeRef.current.click();
  showAlert("success","Note updated successfully")
  showAlert("success","Note updated successfully")
  

}





const modalRef = useRef(null)
const closeRef = useRef(null)






    return (

    <>
<div className='my-4'>

<h2 className='my-4 text-center '>Add a Note</h2>
<AddNotes/>

</div>


<button ref={modalRef} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" name="description" value={note.description} onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
  </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeRef}>Close</button>
        <button type="button"  className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
      </div>
    </div>  
  </div>
</div>

        <div className='row my-4 justify-content-center'>

        <h2 className='text-center my-4 '>Your Notes</h2>
          <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row-reverse',justifyContent:'center'}}>

          {notes.length===0 && "No notes added"}
            {notes.map(element=>{
              return (
                <NoteItem key={element._id} note={element} updateNote={updateNote}  id={element._id} title={element.title} description={element.description}/>
                )
              })}
              </div>
        </div>
    </>    

    )
}

export default Notes;
