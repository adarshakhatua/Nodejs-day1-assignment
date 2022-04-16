import {useEffect, useState} from "react";
const TodosItem = () => {
    
    const [todos, setTodos] = useState([]);
    const getData = () => {
        fetch("http://localhost:8080/todos")
            .then((d) => { return d.json() })
            .then((data)=>{setTodos(data)})
    }
    useEffect(()=>{getData()},[])
    return <div>
        {todos.map((elem) => { return <Singel data={elem.title}/>  })}
        
    </div>
}

function Singel({data}) {
    return <div id="sigle">{data}
        <div id="butn-div">
        <button>⏰</button>
        <button>❌</button>
        </div>
    </div>
}

export {TodosItem}