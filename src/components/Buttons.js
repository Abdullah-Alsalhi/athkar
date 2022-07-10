// import "./Buttons.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className="container">
      <div className="row my-3 justify-content-between">
      <div className="col-md-1"></div>
      <Link to="/sabah" className="col-md-4 my-1 col-sm-12 btn btn-success" type="button">
        أذكار الصباح
      </Link>
      <Link to="/massa" className="col-md-4 my-1 col-sm-12 btn btn-success" type="button">
        أذكار المساء
      </Link>
      <div className="col-md-1"></div>
      <div className="col-md-3"></div>
      <Link to="/quran" className="col-md-6 my-1  col-sm-12 btn btn-success" type="button">
        القرآن الكريم
      </Link>
      <div className="col-md-3"></div>
      </div>
    </div>
  );
}
