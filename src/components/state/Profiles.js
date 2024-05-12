import React from 'react'
import "./Profiles.css"
import { useState } from 'react'
function Profiles() {
    let[image,setImage]=useState("");
    let[data,setData]=useState({
        name:"",
        gender:"",
        email:"",
        description:""

    })
    let[theme,setTheme]=useState({
        bgcolor:"",
        textcolor:"",
        title:""
            })
    const changeToRajat=()=>{
        setImage("https://th.bing.com/th/id/OIP.uo_hoPwUzv_ihIlvHstqtwHaK6?w=195&h=288&c=7&r=0&o=5&dpr=1.5&pid=1.7");
    setData({
        name:"RAJAT SHARMA",
        gender:"MALE",
        email:"rj@gmail.com",
        description:"HE IS A HARD WORKING PROFESSIONAL"


    })
    }
    const changeToRiya=()=>{
        setImage("https://th.bing.com/th/id/OIP.tlMelMNNX58EUoMd3OzyUgHaLH?w=195&h=293&c=7&r=0&o=5&dpr=1.5&pid=1.7");
        setData({
        name:"RIYA BARMA",
        gender:"FEMALE",
        email:"rb@gmail.com",
        description:"SHE IS IT PROFESSIONAL"
    })
    }
    const changeTheme=(event)=>{
        if(event.target.checked)
        {
            setTheme({
                bgcolor:"black",
                textcolor:"white",
                title:"CHANGE TO LIGHT MODE"
            })

        }
        else{
            setTheme({
                bgcolor:"white",
                textcolor:"black",
                title:"CHANGE TO DARK MODE"
            })

        }
    }
  return (
    <div className='mainContainer'>
       
      <div className='leftContainer'>
     <img src={image}
     height="200px"width="200px" alt="NO IMAGE"></img>
      </div>
      <div className='rightContainer' style={{backgroundColor:theme.bgcolor,color:theme.textcolor}}>
        <h2>NAME:{data.name}</h2>
        <h2>GENDER:{data.gender}</h2>
        <h2>EMAIL:{data.email}</h2>
        <h2>DESCRIPTION:{data.description}</h2>
        <button onClick={changeToRajat}>CHANGE TO RAJAT</button>&nbsp;&nbsp;
        <button onClick={changeToRiya}>CHANGE TO RIYA</button>
    <input type="checkbox"onChange={changeTheme}></input>
    <h2>Title:{theme.title}</h2>
    
      </div>
    </div>
  )
}

export default Profiles
