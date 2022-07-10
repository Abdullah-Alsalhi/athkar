// import "./Morning.css";

import React from "react";
import athkar from "../thekr-json/athkar.json";

export default function Evining() {
  return (
    <div className="container text-center">
      <div className="row my-4">
        {athkar
          .filter((e) => e.category === "أذكار المساء")
          .map((e) => {
            return (
              <div className="card col-md-4 my-1 col-sm-12">
                <h6 className="card-header">{e.reference}</h6>
                <p className="card-body">{e.zekr}</p>
                <p className={e.description ? "card-footer" : ""}>
                  {e.description}
                </p>
                <button
                  className="btn btn-success mb-2 pb-0 col-sm-12  d-block bottom-0"
                  onClick={(event) => {
                    if (event.target.innerText == "انتقل للذكر التالي") {
                      event.target.disabled = true;
                      return;
                    }
                    if (event.target.innerText == 0) {
                      event.target.style = "background: #0a4c59";
                      event.currentTarget.innerText = "انتقل للذكر التالي";
                      return;
                    }
                    if (event.target.innerText == 1) {
                      event.target.style = "background: #0a4c59";
                    }
                    event.target.innerText--;
                  }}
                >
                  {e.count}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
