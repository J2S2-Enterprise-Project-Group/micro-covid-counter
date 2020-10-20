import React from 'react';
import logo from './micro-covid-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Micro Covid Counter
        </h3>
      </header>
    </div>
  );
}

export default App;
