import React from 'react';
import './App.css';
import 'typeface-roboto';
import About from './components/about';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <About/>
      </header>
      <div className="App-header">
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
