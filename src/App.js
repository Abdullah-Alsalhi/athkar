import React from 'react';
import './App.css';
import Count from'./components/Count'


function App() {
  const myName= "Jouza";
  return (
    <div className="App">
      <p>Tuwaiq Academey</p>
      <p>{myName}</p>
      <button>Click me</button>
      <Count name="Abdullah"/>
    </div>
  );
}

export default App;
