import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Todos } from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="nav"><h1>TODOS</h1></div>
      <Todos/>
    </div>
  )
}

export default App
