import React, { useState } from "react";
import axios from "axios";
function Create(){
    const [task,setTask]=useState();
    const handleadd=()=>{
        //to pass data we use axios
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>
            {
                location.reload();
            })
        .catch(err=>console.log(err))
    }

    return(
        <div className="create_form">
            <input  type="text" placeholder="What is it today?" onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit" onClick={handleadd}>Add</button>
        </div>
    )
}
export default Create;