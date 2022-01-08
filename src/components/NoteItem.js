import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {

    const {updateNote,note}=props
    const n = useContext(noteContext);
    const{deleteNote} = n;
    // console.log(note)

    const handleDelete = (id)=>{
        deleteNote(id)
    }
    // const handleEdit = (id,title,description,tag) =>{
    //     editNote(id,title,description,tag)
    // }

    return (
        <div className="card col-md-2 mx-4 my-4 p-4 ">
      
        <div className="card-body">
            <div className='d-flex  '>
        <h6 className='align-items-center'> {props.title} </h6>
      
           

        </div>
        <div>{props.description}</div>
        </div>
              <div className='d-flex'>

        <i className="fas fa-pen mx-4"  onClick={()=>{updateNote(note)}}></i>
        <i className="fas fa-trash mx-4" onClick={()=>{handleDelete(props.id)}}></i>
              </div>
      </div>
    )
}

export default NoteItem;