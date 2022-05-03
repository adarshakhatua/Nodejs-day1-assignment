import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manufact = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h2>Mobile Operating System</h2>
      <ul>{os.map((elem) => { return <li>{elem}</li>})}</ul>
      <h2>Mobile Manufacturers</h2>
      <ul>{manufact.map((elem) => { return <li>{elem}</li>})}</ul>
    </div>
  );
}

export default App;
