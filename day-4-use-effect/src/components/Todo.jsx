import { useState } from "react";
import { TodoInput } from "./TodosInput.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { nanoid } from "nanoid"
import "./Todo.css"

function Todo() {
    const [todoList, setTodoList] = useState([])
    const cb = (todo) => {
        // console.log("Get Data: " + todo)
        const obj = {
            title: todo,
            stat: false,
            id:nanoid(4),
        }
        setTodoList([...todoList, obj])
    }
    const handelId = (id) => {
        //console.log("call: " + id)
        setTodoList(todoList.map((e)=>(e.id===id)?{...e,stat:!e.stat}:e))
    }
    return (
        <div>
            <div id="input">
            <TodoInput data={cb} /> 
           </div>
            <div id="todos-div">
            {todoList.map((elem) => {
                return <TodoItem handelId={handelId} todo={elem}/>
            })}
          </div>
        </div>
    )
}
export default Todo;