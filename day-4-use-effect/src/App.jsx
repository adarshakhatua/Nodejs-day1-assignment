
import Todo from './components/Todo.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar">MY T<span style={{fontSize:"75%"}}>🕐</span>D<span style={{fontSize:"75%"}}>⏱</span></div>
      <div id="content">
      <Todo />
      </div>
    </div>
  );
}

export default App;
