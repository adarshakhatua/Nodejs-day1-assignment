import nav from "./navbar.js";
import "./index.css"

document.getElementById("navbar-div").innerHTML=nav()
function displayForm(){
    document.getElementById("todo_form").style.display="block";
    document.getElementById("todo_form").style.zIndex=1;
}    
displaData()
function populateData(){  
    let todos={
        name:document.getElementById("task").value,
        date:document.getElementById("date").value,
        time:document.getElementById("time").value,
        task_details:document.getElementById("task_details").value,
    }
    let array=JSON.parse(localStorage.getItem("todos")) || [];
    array.push(todos)
    localStorage.setItem("todos",JSON.stringify(array));
    displaData()
}

function displaData(){
    let content=JSON.parse(localStorage.getItem("todos"))
    document.getElementById("content").innerHTML=""
    content.map((elem,i)=>{
        
        const todo=document.createElement("div")
        todo.className="todo_content"
        const name=document.createElement("div");
        name.id="name"
        name.textContent=elem.name
        const date=document.createElement("div");
        date.id="date"
        date.textContent=elem.date
        const time=document.createElement("div");
        time.id="time"
        time.textContent=elem.time
        const details=document.createElement("div");
        details.id="details"
        details.textContent=elem.task_details
        const remove=document.createElement("div");
        remove.className="remove";
        remove.id=`remove_${i}`
        remove.textContent="Remove";
        remove.addEventListener("click",removeItems);
        todo.append(remove,name,date,time,details)
        document.getElementById("content").append(todo)
    })
}

function removeItems(elem){
   let index=elem.target.id.slice(-1)*1;
    let content=JSON.parse(localStorage.getItem("todos"));
    content.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(content))
    displaData()
    console.log(content)
    elem.target
}