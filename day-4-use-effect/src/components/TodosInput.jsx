import { useState } from "react"
import "./TodoInput.css"

const TodoInput = ({ data }) => {
    const[input,setInput]=useState("")
    //const dummy="ajhvv"
    return (
        <div>
            <input 
                onChange={(e)=>{setInput(e.target.value)}}
                type="text" placeholder="Write something here" />
            <button onClick={() => { if(input.trim().length !== 0){data(input)}  }}>➕</button>
           
        </div>
    )
}

export {TodoInput}