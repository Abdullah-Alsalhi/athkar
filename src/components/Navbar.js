import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success shadow p-3 mb-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-white" to="/">
            حصن المسلم
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/missing_page"
                  className="nav-link text-white"
                  href="#"
                >
                  فضل الذكر
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/missing_page" className="nav-link disabled text-white">
                  القرآن الكريم
                </Link>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
              
                disabled
                className="form-control me-2 searchBar"
                type="search"
                placeholder="سور القرآن"
                aria-label="Search"
              />
              <Link
                disabled
                to="/missing_page"
                className="btn"
                style={{ backgroundColor: "#EEE", color: "#198754" }}
                type="submit"
              >
                ابحث
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}