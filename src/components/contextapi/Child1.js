import React from 'react'
import Child2 from './Child2'
import { useState } from 'react'
function Child1() {
    let[state,setState]=useState("");
    const populateValue=(event)=>
    {
        setState(event.target.value);
    }
  return (
    <div>
      <h2>CHILD1 COMPONENT</h2>
      <Child2/>
    </div>
  )
}

export default Child1
