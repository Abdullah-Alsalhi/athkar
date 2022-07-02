import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Morning from "./components/Morning";

import Evining from "./components/Evining";
function App() {
  return (
    <div className="App page">
      <Navbar />
      <div className="container">
        <Header />
        
        {/* this route will take you to / */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="d-grid gap-2 col-6 mx-auto mt-4">
                
                <Link to="/sabah" className="btn btn-success" type="button">
                  أذكار الصباح
                </Link>
                <Link to="/massa" className="btn btn-success" type="button">
                  أذكار المساء
                </Link>
              </div>
            }
          />
        </Routes>
        {/* end of / route */}
        
        {/* this route will take you to moring athkar page */}
        <Routes>
          <Route path="/sabah" element={
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
          <Morning />
          <Link to="/" className="btn btn-success" type="button">إلى الصفحة الرئيسية</Link>
          </div>
          } />
        </Routes>
        {/* end of morning athkar page */}

        {/* this route will take you to evining athkar page */}
        <Routes>
          <Route path="/massa" element={
          <div className="d-grid gap-2 col-6 mx-auto mt-4">
          <Evining />
          <Link to="/" className="btn btn-success" type="button">إلى الصفحة الرئيسية</Link>
          </div>
          } />
        </Routes>
        {/* end of evining athkar page */}
        {/* missing_page route */}
        <Routes>
          <Route path="/missing_page" element={<h1 >لم يتم العمل على هذه الصفحة حتى الان</h1>}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
