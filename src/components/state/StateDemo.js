import React from 'react'
import { useState } from 'react'
function StateDemo() {
    let[state,setState]=useState("https://th.bing.com/th/id/OIP.25vSXGJsvi1u3JIjcfvfNQHaEo?w=274&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7");
 const changeToAngular=()=>{
    setState("https://th.bing.com/th/id/OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3?rs=1&pid=ImgDetMain");
 }
 const changeToReact=()=>{
    setState("https://th.bing.com/th/id/OIP.boBVlxoxhHiuFvn7MipwIQHaHW?rs=1&pid=ImgDetMain");
 }
    return (
    <div>
      <img src={state}
      height="200px" width="200px" alt="NO IMAGE"/>
      <br></br>
      <button onClick={changeToAngular}>ANGULAR</button>&nbsp;&nbsp;
      <button onClick={changeToReact}>REACT</button>
    </div>
  )
}

export default StateDemo
