import React from 'react'

 const Home = () => {
    return (
<>

<div className='my-4 '>

<h2 className='my-4'>Add a Note</h2>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>

<div className='my-4'>
<h2 className='my-4'>Your Notes</h2>

<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi natus perferendis consequuntur enim ipsum earum, sunt, distinctio reiciendis quaerat rem id cupiditate nesciunt error voluptatibus animi vel ratione. Exercitationem.</div>

</div>
</>
    )
}
export default Home;
