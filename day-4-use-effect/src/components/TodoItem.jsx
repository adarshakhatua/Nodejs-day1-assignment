import "./TodoItem.css"

const TodoItem = ({ todo, handelId }) => {
    return <div id="todo-item">
        {todo.title}
        <button onClick={() => {handelId(todo.id)}}>{todo.stat ? "✔":"⏰"}</button>
    </div>

}

export { TodoItem };