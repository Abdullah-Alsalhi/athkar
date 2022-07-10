// import './Navbar.css'
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg nv-bg shadow p-3 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            حصن المسلم
          </Link>
          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="navbar-nav me-auto mb-md-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/surah_list"
                  className="nav-link "
                >
                  أدعية نبوية
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quran" className="nav-link">
                  القرآن الكريم
                </Link>
              </li>
            </ul>
          </div>
      </nav>
  </div>
  );
}
