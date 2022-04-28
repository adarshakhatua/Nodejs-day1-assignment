

// //initialize state
// const initialState = { counter: 0 };

// //Action creator
// const increment = () => {
//     return {
//         type: 'increment',
//     };
// }

// const decrement = () => {
//     return {
//         type: 'decrement',
//     };
// }
// //reducer
// function counterRecucer(state=initialState, action) {
//     if (action.type === "increment") {
//         return {
//             ...state,
//             counter: state.counter + 1,
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             ...state,
//             counter: state.counter - 1,
//         }
//     }
//     return state;
// }


// const store = Redux.createStore(counterRecucer);

// function render() {
//     const state = store.getState();

//     document.getElementById("counter").innerHTML = state.counter;
// }
// render();

// //console.log(state);

// store.subscribe(render)
// document.getElementById("increment").addEventListener('click', function () {
//     store.dispatch(increment())
// })
// document.getElementById("decrement").addEventListener('click', function () {
//     store.dispatch(decrement())
// })

// const store=Redux.createStore()



//Action Type
const ADD_TODOS = "ADD_TODOS";

//Action creator 
const addTodos = (title) => {
    return {
        type:ADD_TODOS,
        payload: {
            todos: title,
            status:false
        },
    }
}

//Reducer
const addTodosReducer = (store,action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...store, todos: [...store.todos, { todos: action.payload.todos, status: action.payload.status }]
            };
        default:
            return store;
    }
}

const initialState = { todos: [] };

const store = Redux.createStore(addTodosReducer, initialState);
//console.log(store.getState());

document.getElementById("addBtn").addEventListener("click", () => {
    store.dispatch(addTodos(document.getElementById("inputCon").value));
    console.log(store.getState());
    store.getState().todos.length !== 0 ?
        Render() : null
});

function Render() {
        document.getElementById("showTodos").innerHTML = "";
        store.getState().todos.map((elem, index) => {
            const showTodosSingle = document.createElement('div');
            showTodosSingle.className = "showTodosSingle";

            const txtContent = document.createElement("div");
            txtContent.className = "txtContent";
            txtContent.textContent = elem.todos;
            console.log(elem)

            const markBtn = document.createElement("div");
            markBtn.className = "markBtn";
            markBtn.textContent = store.getState().todos[index].status ? "✔" : "⏱";
            markBtn.id=index+"btn"
            markBtn.addEventListener("click", (elem) => {
                store.getState().todos[elem.target.id.slice(0, -3) * 1].status = !store.getState().todos[elem.target.id.slice(0, -3) * 1].status;
                markBtn.textContent = store.getState().todos[elem.target.id.slice(0, -3) * 1].status ? "✔" : "⏱";

})

            const removeBtn = document.createElement('div');
            removeBtn.className = "removeBtn";
            removeBtn.textContent = "❌"
            removeBtn.id = index;
            removeBtn.addEventListener("click", (elem) => { store.getState().todos.splice(elem.target.id * 1, 1); Render() })

            document.getElementById("showTodos").append(showTodosSingle);
            showTodosSingle.append(txtContent, markBtn, removeBtn);

        })

}
Render()

// store.getState().todos.length !== 0 ?
//         store.getState().todos.map((elem) => {
//         const showTodosSingle = document.createElement('div');
//         showTodosSingle.className = "showTodosSingle";

//         const txtContent = document.createElement("div");
//         txtContent.className = "txtContent";
//         txtContent.textContent = elem.todos;
//         console.log(elem)

//         const markBtn = document.createElement("div");
//         markBtn.className = "markBtn";
//         markBtn.textContent = "⏱"

//         const removeBtn = document.createElement('div');
//         removeBtn.className = "removeBtn";
//         removeBtn.textContent = "❌"

//     document.getElementById("showTodos").append(showTodosSingle);
//     showTodosSingle.append(txtContent,markBtn,removeBtn);
    
// }):null


