import logo from '../../logo.svg';
import '../../App.css';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/cheat/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="App-link"
        href="/admin"
      >
        Admin
      </a>
    </header>
  );
}

export default App;