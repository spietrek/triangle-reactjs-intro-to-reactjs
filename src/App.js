import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo1a from './Demo1a';
import Demo1b from './Demo1b';
import Demo1c from './Demo1c';
import Demo1d from './Demo1d';
// import Demo2a from './Demo2a';
// import Demo2b from './Demo2b';
// import Demo2c from './Demo2c';
// import Demo2d from './Demo2d';
// import Demo3a from './Demo3a';
// import Demo3b from './Demo3b';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Demo1a />
    <Demo1b />
    <Demo1c />
    <Demo1d />
    {/* <Demo2a />
    <Demo2b />
    <Demo2c />
    <Demo2d /> */}
    {/* <Demo3a />
    <Demo3b /> */}
  </div>
);

export default App;
