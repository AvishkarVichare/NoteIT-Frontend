import React,{useContext, useEffect} from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import alertContext from '../context/alert/alertContext'
// imort {Link}
 const Navbar = () => {

  const a = useContext(alertContext);

  const {showAlert} = a;



  const handleLogout = ()=>{
    localStorage.removeItem('token');
    showAlert("info","Logged Out")
    
  }

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">NoteIT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
       
       
      </ul>
      {
      localStorage.getItem('token')?    <Link onClick={handleLogout} className="btn btn-primary mx-3" to="/login" role="button">Logout</Link>:<> <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary" to="/signup" role="button">Sign Up</Link>
      </>
 }
    

    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;
