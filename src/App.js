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
    <div className="App">
      <Navbar />

      {/* this route will take you to / */}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      {/* end of / route */}

      {/* this route will take you to moring athkar page */}
      <Routes>
        <Route
          path="/sabah"
          element={
            <div className="">
              <Morning />
              <Link to="/" className="" type="button">
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

              <Link to="/" className="" type="button">
                إلى الصفحة الرئيسية
              </Link>
            </div>
          }
        />
      </Routes>

      {/* start quran route */}
      <Routes>
        <Route path="/quran" element={<Quran />} />
      </Routes>
      {/* end quran route */}
      {/* end of evining athkar page */}
      {/* missing_page route */}
      <Routes>
        <Route path="/surah_list" element={<h1>لاشيء لعرضه حتى الان</h1>} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
