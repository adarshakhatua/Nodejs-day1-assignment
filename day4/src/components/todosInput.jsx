import { useEffect, useState } from "react";
import "./todosInput.css"
import "./todosItem.css"

const TododsInput = () => {
    const [text, setText] = useState("")
    return <div id="input-div">
        <input type="text" placeholder="write something here..." onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={() => {
            const payload = {
                title: text,
                status:false
            }
            fetch("http://localhost:8080/todos", {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body:JSON.stringify(payload)
            })
        }}>➕</button>
    </div>
}
export {TododsInput}