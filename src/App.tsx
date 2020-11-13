import React from 'react';
import logo from './micro-covid-logo.png';
import './App.css';
import ActivityForm from './components/ActivityForm/ActivityForm';

interface IAppContainer {
}

export const App: React.FC<IAppContainer> = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Micro Covid Counter
        </h3>
      </header>
      <ActivityForm />
    </div>
  );
}

export default App;
