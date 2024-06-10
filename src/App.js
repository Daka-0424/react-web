import logo from './logo.svg';
import './App.css';
// import React, { useEffect } from 'react';
// import axios from "axios";

function App() {
  // useEffect(() => {
  //   (
  //     async () => {
  //       const data = await axios.get("http://localhost:8080/resource_versions",{
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Accept": "application/json",
  //       }})
  //       console.log(data.data)
  //     }
  //   )()
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
          href="/cheat"
        >
          Cheat
        </a>
        <a
          className="App-link"
          href="/admin"
        >
          Admin
        </a>
      </header>
    </div>
  );
}

export default App;
