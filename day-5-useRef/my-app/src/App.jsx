import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [time, setTime] = useState(0)
  const timerRef = useRef(null)
  const inputRef = useRef(0)
  if (time >= inputRef.current*1) { clearInterval(timerRef.current) }
  return (
    <div className="App">
      <div id="timer">
        <div id="display">
          <div id="txt">
            <h1>{time}</h1>
          </div>
        </div>
        <div id="controll">
          <button onClick={() => {time < inputRef.current*1?timerRef.current=setInterval(()=>{setTime((time)=>{return time+1})},1000):clearInterval(timerRef.current)}}>START</button>         
          <button onClick={()=>{clearInterval(timerRef.current)}}>STOP</button>         
          <button onClick={() => { clearInterval(timerRef.current); setTime(0)}}>RESET</button>
        </div>   
      </div>
      <input type="number"  placeholder='Enter time in seconds....' onChange={(d)=>{(inputRef.current=d.target.value)}}/>
    </div>
  );
}

export default App;
