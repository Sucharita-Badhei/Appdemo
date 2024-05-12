import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
function UserInfo() {
    let[user,setUser]=useState([]);
    useEffect(()=>{
        axios.get("https://randomuser.me/api/?results=20")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);

        })
        .catch((error)=>{
            console.log(error);
            alert("SOMETHING WRONG ON FETCHING DATA");
        })

    },[])
  return (
    <div>
         <h2>USER INFORMATION</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quaerat iusto eveniet? Placeat architecto, vero voluptate quasi, commodi possimus quia numquam quod debitis repudiandae ducimus? Recusandae velit at ad ratione nostrum. Officiis minus magni temporibus praesentium sunt voluptates eius quo soluta possimus, vel rem voluptate excepturi sit, animi consequuntur cumque distinctio, voluptas dolores maiores magnam libero illo eos adipisci. Accusantium quibusdam id enim praesentium! Obcaecati quis libero perferendis temporibus unde iure cumque porro voluptatibus, voluptatem eligendi praesentium itaque laudantium, explicabo natus dolorum, vero quo recusandae! Unde, hic voluptates? Accusantium id aliquam laudantium sunt necessitatibus ipsam, itaque ad dolores cumque repellat?</p>
       {
        user.length>0 ?
        <div>
            <table cellPadding={10} style={{margin:"10px auto"}}>
                <thead style={{backgroundColor:"black",color:"white"}}>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element,index)=>{
                            return(
                                <tr>
                                    
                                       <td>{index+1}</td> 
                                        <td><img src={element.picture.medium}height={80} width={80}/></td>
                                        <td>{element.name.first}</td>
                                        <td>{element.gender}</td>
                                        <td>{element.email}</td>
                                        <td>{element.location.city}</td>

                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>:<h2 style={{color:"red"}}>NO USER INFORMATION</h2>
    }
    </div>
  )
}

export default UserInfo
