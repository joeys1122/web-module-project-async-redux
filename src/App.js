import React from 'react';

import Quote from './components/Quote';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <span>Built using <a href='https://rapidapi.com/martin.svoboda/api/quotes15/details'>Quotes API </a>by Martin Svoboda</span>
      <Quote/>
    </div>
  );
}

export default App;