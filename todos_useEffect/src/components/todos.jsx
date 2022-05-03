import { useEffect, useState } from "react";

const Todos = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);
    const [remove,setRemove]=useState(false)
    
    const populateTodos = () => {
        fetch("http://localhost:5000/todos").then((d)=>{return d.json()}).then((data)=>{setTodos(data)})
    }
    const populateTodosDone = () => {
        fetch("http://localhost:5000/done").then((d)=>{return d.json()}).then((data)=>{setDone(data)})
    }
    useEffect(()=>{populateTodos()},[])
    useEffect(()=>{populateTodosDone()},[])
    return <div id="todos-div">
        <div id="not-done">
            <div id="input-div">
                <button id="add-btn" onClick={() => {
                    const payload = {
                        title: text,
                        select: false,
                        fav:false,
                    }
                    fetch("http://localhost:5000/todos", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(payload),
                    }).then(()=>{populateTodos()})
                }}>+</button>      
                <input type="text" placeholder="Add a to-do..." onChange={(e)=>{setText(e.target.value)}}/>
            </div>
            <div id="todos">{todos.map((elem) => {
                return <div id="todos_item">
                    <input type="checkbox" onChange={(d) => {
                        const payload = {
                            title: elem.title,
                            select: d.target.checked,
                            fav:elem.fav
                        }
                        fetch(`http://localhost:5000/todos/${elem.id}`,{
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(populateTodos());
                        fetch("http://localhost:5000/done", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload)
                        }).then(populateTodosDone())
                    }}/>
                {elem.title}
                <img src={elem.fav?"https://cdn-icons-png.flaticon.com/512/1828/1828884.png":"https://cdn-icons-png.flaticon.com/512/1828/1828970.png"} alt="" onClick={() => {
                    const payload = {
                        title: elem.title,
                        select: elem.select,
                        fav:!elem.fav
                    }
                    fetch(`http://localhost:5000/todos/${elem.id}`,{
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    }).then(populateTodos());
                }}/>
            </div>
            })}</div>
        </div>

        <div id="done">
            <button id="done-btn" onClick={() => { setRemove(!remove); populateTodosDone()}}>SHOW COMPLETED TO-DOS</button>
            <div>{remove?
                done.map((d) => {
                    return <div id="done-item">
                        <input type="checkbox" onChange={(e) => {
                        const payload = {
                            title: d.title,
                            select: e.target.checked,
                            fav:d.fav
                        }
                        fetch(`http://localhost:5000/done/${d.id}`,{
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(populateTodosDone());
                        fetch("http://localhost:5000/todos", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload)
                        }).then(populateTodos())
                    }}/>
                        <p>{d.title}</p>
                        <img src={d.fav?"https://cdn-icons-png.flaticon.com/512/1828/1828884.png":"https://cdn-icons-png.flaticon.com/512/1828/1828970.png"} alt="" />
                        
                    </div>
                }):null
            }</div>
        </div>
        
    </div>
}

function TodosItem({data}) {
  

    return 
}

export { Todos };