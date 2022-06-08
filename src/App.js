import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="d-grid gap-2 col-6 mx-auto day-thekr">
        <button className="btn btn-primary" type="button">أذكار الصباح</button>
        <button className="btn btn-primary" type="button">أذكار المساء</button>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
