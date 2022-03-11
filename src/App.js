import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => window.open('http://localhost:3000/chat.html')}
        >
          To Chat
        </button>
      </header>
    </div>
  );
}

export default App;
