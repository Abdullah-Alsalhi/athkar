import React from "react";
import "./App.css";
import Count from "./components/Count";
import athkar from "./athkar.json";
import Morning from "./components/Morning";
import Footer from "./components/Footer";
function App() {
  const myName = "Jouza";
  return (
    <div className="App">
      {/* <p>Tuwaiq Academey</p>
      <p>{myName}</p>
      <button>Click me</button>
      <Count times="Abdullah" /> */}
    {athkar.map(e => {
      return <div>
        <Morning zekr={e.zekr}/>
        <Count times={e.count}/>
        <h3>{e.description}</h3>
      </div>
    })}
    <Footer/>
    </div>
  );
}

export default App;
