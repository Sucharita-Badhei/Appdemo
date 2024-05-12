import React from 'react'
import "./Nav.css"


function Nav() {
  return (
    <div className='navContainer'>
       
      <div className='lftContainer'>
      <h2>MY APP</h2>
      </div>
      <div className='rhtContainer'>
     <a href='\profile'>PROFILE</a>
     <a href='\user'>USER</a>
     <a href='\uinfo'>USERINFO</a>
     <a href='\props'>PROPS</a>
     <a href='\products'>PRODUCTS</a>
     <a href='\condrend'>LOGINREGISTER</a>
     
      </div>
    </div>
    
  )
}

export default Nav
