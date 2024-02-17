import React from "react";
import { useState } from "react";
import {style}  from "./component/Video.css"
 const Video =()  =>{
    const [vid ,setvid]=useState(null)
    const handlechange =(event)=>{
        setvid(URL.createObjectURL(event.target.files[0]))
    }
   
    return(
    <div>
        <input type="file" onChange={handlechange} style={{color:"red"}}/>
        <iframe src={vid} width={800} height={500} ></iframe>
    </div>
    )
 }
 export default  Video