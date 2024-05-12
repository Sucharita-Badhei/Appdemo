import React from 'react'

function Login() {
  return (
    
      <div style={{width:"30%",textAlign:"center",margin:"100px auto"}}>
      <input type="text" className='form-control' placeholder='ENTER THE USERNAME'></input>
      <input type="password" className='form-control' placeholder='ENTER THE PASSWORD'></input> 
      <button className='btn btn-outline-primary'>LOGIN</button>
    </div>
  
  )
}

export default Login
