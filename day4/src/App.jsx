import { useEffect, useState } from 'react';
import './App.css';
import { Todos } from './components/todos';
function App() {
  const [mount, setMount] = useState(true);
  
  
  return (
    <div className="App">
     { mount?<Todos />:null}
      <button onClick={() => { setMount(!mount) }}>{mount ? "hide" : "show"}</button>
      
      
    </div>
  );
}

export default App;
