import React from "react";

import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Morning from "./components/Morning";
import Quran from "./components/Quran";
import Evining from "./components/Evining";

function App() {
  return (
    <div className="App page ">
      <Navbar />
      <div className="container">
        {/* this route will take you to / */}
        <Routes>
          <Route
            path="/"
            element={
              
                <Header />
                
            }
          />
        </Routes>
        {/* end of / route */}

        {/* this route will take you to moring athkar page */}
        <Routes>
          <Route
            path="/sabah"
            element={
              <div className="d-grid gap-2 col-11 mx-auto mt-4">
                <Morning />
                <Link to="/" className="btn btn-success" type="button">
                  إلى الصفحة الرئيسية
                </Link>
              </div>
            }
          />
        </Routes>
        {/* end of morning athkar page */}

        {/* this route will take you to evining athkar page */}
        <Routes>
          <Route
            path="/massa"
            element={
              <div>
                <Evining />
                <div className="d-grid gap-2 col-11 mx-auto mt-4">
                  <Link to="/" className="btn btn-success" type="button">
                    إلى الصفحة الرئيسية
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>

        {/* start quran route */}
        <Routes>
          <Route
            path="/quran"
            element={
              <div>
                <Quran />
              </div>
            }
          />
        </Routes>
        {/* end quran route */}
        {/* end of evining athkar page */}
        {/* missing_page route */}
        <Routes>
          <Route
            path="/surah_list"
            element={<h1>لاشيء لعرضه حتى الان</h1>}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
