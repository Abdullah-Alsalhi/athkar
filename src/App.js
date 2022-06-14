import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App page">
      <Navbar/>
      <div className="container" >
      <Header/>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <button className="btn btn-success" type="button">أذكار الصباح</button>
        <button className="btn btn-success" type="button">أذكار المساء</button>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
