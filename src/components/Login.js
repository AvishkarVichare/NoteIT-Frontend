import React,{useContext, useState} from 'react'
import { useNavigate} from "react-router-dom";
import alertContext from '../context/alert/alertContext';
import Alert from './Alert';


const Login = () => {

  const host = 'http://localhost'
  
    const a = useContext(alertContext);
    const navigate = useNavigate();

  const [credential, setcredential] = useState({email:"",password:""})
  
  const {showAlert} = a;

const handleSubmit = async(e)=>{

  e.preventDefault();
  const response = await fetch(`${host}/api/auth/login`,{
    
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({email:credential.email,password:credential.password})
  });
  
  const json = await response.json();

  if(json.success){
      localStorage.setItem('token',json.authenticateToken)
      navigate('/')
      showAlert("info","Logged In")

  }else{
    showAlert("danger","Please enter valid credentials")
  }

  console.log(json)
}

const onchange = (e)=>{

  setcredential({...credential,[e.target.name]:e.target.value})
  console.log(credential)

}

    return (
      <>
      <Alert/>
<div className='container my-3'>

<h2 className='text-center my-3'>Login</h2>
  <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input onChange={onchange} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password1">Password</label>
    <input onChange={onchange} type="password" className="form-control" id="password1" name="password" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary my-3">Login</button>
</form>
</div>
</>

    )
}

export default Login
