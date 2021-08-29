import './App.css';
import CountDown from "./lib/components"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountDown release="2021-09-01T00:00:00"/>
      </header>
    </div>
  );
}

export default App;
