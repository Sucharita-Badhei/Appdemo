import React from 'react'
import "./Products.css"
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Products() {
  
  return (
   

    <div className='prdContainer '>
       <div className='lContainer'>
    <Link to='electronics'>ELECTRONICS</Link>
     <Link to='garments'>GARMENTS</Link>
     <Link to='jewellery'>JEWELLERY</Link>
     <Link to='retails'>RETAILS</Link>
     </div>
     <div className='rContainer'>
      <Outlet/>
     </div>
     
  </div>
  )
}

export default Products