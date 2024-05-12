import React from 'react'

function Register() {
  return (
    <div style={{width:"30%",textAlign:"center",margin:"100px auto"}}>
      <input type="text" className='form-control' placeholder='ENTER THE USERNAME'></input>
      <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'></input>
      <input type="text" className='form-control'placeholder='ENTER YOUR NAME'></input>
      <input type="text" className='form-control'placeholder='ENTER YOUR EMAIL'></input>
      <input type="text" className='form-control'placeholder='ENTER YOUR PHONE NUMBER'></input>
      <button className='btn btn-outline-dark'>REGISTER</button>
      
    </div>
   
  )
}

export default Register
