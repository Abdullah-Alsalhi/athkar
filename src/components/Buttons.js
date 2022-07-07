import "./Buttons.css";
import React from "react";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className="d-grid gap-2 col-12 mx-auto mt-3">
      <Link to="/sabah" className="btn btn-custom shadow" type="button">
        أذكار الصباح
      </Link>
      <Link to="/massa" className="btn btn-custom shadow" type="button">
        أذكار المساء
      </Link>
      <Link to="/quran" className="btn btn-custom shadow" type="button">
        القرآن الكريم
      </Link>
    </div>
  );
}
