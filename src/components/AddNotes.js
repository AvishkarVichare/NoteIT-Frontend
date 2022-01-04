import React,{useContext,useState} from 'react'
import noteContext from '../context/notes/noteContext'




const AddNotes = () => {

    const n = useContext(noteContext);
    const {addNotes} = n;
    

    const [note, setnote] = useState({title:"",description:"",tag:""})

    const handlClick = (e) =>{

        e.preventDefault();
        // console.log(note)
        // console.log(note.title)
        addNotes(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""})
    }
    
    const onChange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value})
        // console.log(e.target.name)
        
    }


    return (
        <div>
            <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" name="description" value={note.description}  onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag}  onChange={onChange} />
  </div>

  <button type="submit" className="btn btn-primary" onClick={handlClick}>Add</button>
</form>
        </div>
    )
}

export default AddNotes;