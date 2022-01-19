import React from 'react';

import Quote from './components/Quote';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <span>Built using <a href='https://github.com/fisenkodv/dictum'>Dictum API</a></span>
      <Quote/>
    </div>
  );
}

export default App;