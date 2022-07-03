import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import alertContext from '../context/alert/alertContext'
import Alert from './Alert'


const SignUp = () => {

    const host = 'https://noteitserver.herokuapp.com'

    const a = useContext(alertContext);

    const [credential, setcredential] = useState({name:"",email:"",password:"",cpassword:""})

    const {showAlert} = a;

    const navigate = useNavigate();

    const handleSign = async(e)=>{
        e.preventDefault();

        const response = await fetch(`${host}/api/auth/createuser`,{
    
            method:'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credential.name,email:credential.email,password:credential.password})
          });
          const json = await response.json()
        //   console.log(json)

        if(json.success){
          localStorage.setItem('token',json.authenticateToken)
            navigate('/');
      showAlert("info","User Created")

        }
        else{
          showAlert("danger","Please enter valid credential")
        }

    }

const onchange = (e)=>{
    setcredential({...credential,[e.target.name]:e.target.value})
    // console.log(credential)
}
    

    return (

      <>
          
          <Alert/>

        <div className='container my-3'>

        <h2 className='text-center my-3'>Sign Up</h2>
        
          <form onSubmit={handleSign}>
          <div className="form-group">
          <label htmlFor="name">Enter Name</label>
            <input onChange={onchange} type="text" className="form-control" id="name" name="name"  placeholder="Enter Name"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={onchange} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={onchange} type="password" className="form-control" name="password" id="password" placeholder="Password"/>
          </div>

          <div className="form-group">
            <label htmlFor="cpassword">Password</label>
            <input onChange={onchange} type="password" name="cpassword" className="form-control" id="cpassword" placeholder="Confirm Password"/>
          </div>
          
          <button type="submit" className="btn btn-primary my-3">Sign Up</button>
        </form>
        </div>
      </>

    )
}

export default SignUp
