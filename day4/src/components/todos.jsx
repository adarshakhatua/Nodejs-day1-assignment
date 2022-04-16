import { useEffect, useState } from "react";
import { TododsInput } from "./todosInput";
import { TodosItem } from "./todosItem";
const Todos = () => {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    
    const getData = () => {
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=5`)
            .then((d) => { return d.json() })
            .then((data) => { setTodos(data); setLoading(false); })
    }
    useEffect(()=>{getData()},[page])
    return loading?<div><img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /></div>:<div id="todos">
        <div id="nav">MY T<span>🕐</span>D<span>⚽</span></div>
        <div id="input-div">
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
            }).then(() => { getData() })
            }}>➕</button>
        </div>
        <div>
            {todos.map((elem) => { return <div id="sigle">{elem.title}
        <div id="butn-div">
                    <button onClick={() => {
                 fetch(`http://localhost:8080/todos/${elem.id}`,{
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                     },
                     body: JSON.stringify({
                         title: elem.title,
                         status:!elem.status
                    })
                 }).then(() => { getData() })
        }}>{elem.status?"✔":"⏰"}</button>
            <button onClick={() => {
                 fetch(`http://localhost:8080/todos/${elem.id}`,{
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }, 
                 }).then(() => { getData() })
        }}>❌</button>
        </div>
    </div> })}
        </div>
        <div id="pagination">
            <button onClick={()=>{page>1?setPage(page-1):setPage(page-0)}}>◀</button>
            <button onClick={() => { todos.length === 0 || todos.length < 5 ? setPage(page + 0) : setPage(page + 1) }}>▶</button>
        </div>
    </div>
}


export {Todos}