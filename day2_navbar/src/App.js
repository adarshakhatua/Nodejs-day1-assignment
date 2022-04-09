import logo from './logo.svg';
import './App.css';

function App() {
  const link=["Services","Projects","About"]
  return (
    <div className="App">
      <div id="nav">
        <div id="logo">LOGOBAKERY</div>
        <div id="link">{link.map((elem)=>{return <Link link={elem}/>})}</div>
        <div id="button">Contact</div>
      </div>
    </div>
  );
}
function Link({link}) {
  return <div>{link}</div>
}

export default App;
