
import './App.css';
import{useState} from"react"


function App() {
  
  const [counter, setCounter] = useState(0)
  const change=(value)=>{setCounter(counter+value)}
  return (
    <div className="App">

      <h1 className={counter%2 ? "odd":"even"}>Counter:{counter}</h1>
      <button onClick={() => { change(1)}}>add</button>
      <button onClick={()=>{change(-1)}}>remove</button>
      <button onClick={()=>{change(counter)}}>double</button>
    </div>
  );
}

export default App;
