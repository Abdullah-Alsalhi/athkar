// import "./Quran.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toArabic } from "arabic-digits";

export default function Quran() {
  const [allSurah, setAllSurah] = useState([]);
  const [surah_id, setSurah_id] = useState(0);

  let pageNumber;
  const [surah_name, setSurah_name] = useState("");
  const [ayah, setAyah] = useState([]);
  const getSurah = (surah_id) => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${surah_id}/quran-uthmani`)
      .then((response) => {
        setSurah_name(response.data.data.name);
        setAyah(response.data.data.ayahs);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  const mapOverAyah = ayah.map((e, i) => {
    if (e.text.startsWith("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")) {
      let bsm = e.text.slice(0, 37);
      let first_aya = e.text
        .split("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
        .join(" ");

      return (
        <>
          <p className="h1">{bsm}</p>
          {/* ﴿١﴾ */}
          <span className="h2">{first_aya}</span>
          <small className="h6"> ﴿{toArabic(e.numberInSurah)}﴾</small>
          &nbsp;
        </>
      );
    } else {
      return (
        /*  */
        <span className="">
          {e.text} <small className="h6">﴿{toArabic(e.numberInSurah)}﴾ </small>
          {e.page > pageNumber ? (
            <div className="card-footer mt-3 h6">
              <p>{toArabic(e.page)}</p>
            </div>
          ) : (
            ""
          )}
          <span style={{ display: "none" }}>{(pageNumber = e.page)}</span>
        </span>
      );
    }
  });

  /* START CHOOSING SURAH DEPENDING ON SURAH NUMBER  */

  const getAllSurah = () => {
    axios.get("http://api.alquran.cloud/v1/meta").then((response) => {
      setAllSurah(response.data.data.surahs.references);
    });
  };
  useEffect(() => {
    getAllSurah();
  }, []);

  const mapOverAllSurahs = allSurah.map((surah) => {
    return (
      <div className="">
        <button
          type="button"
          className="btn btn-link"
          value={surah.number}
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          key={Math.random() * 3000}
          onClick={(event) => {
            setSurah_id(Number(event.target.value));
            getSurah(Number(event.target.value));
          }}
        >
          {toArabic(surah.number)}-{surah.name}
        </button>
      </div>
    );
  });
  /* END OF CHOSEN SURAH NUMBER */
  /* {mapOverAllSurahs} */

  return (
    <>
      {/* accordian start */}
      <div className="accordion container-fluid" id="accordionExample">
        <div className="accordion-item mt-4">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              كل السور
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="container my-0">
                <div className="row">{mapOverAllSurahs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* accordian end */}
      {/* maping start here over the surah ayat */}
      {surah_id ? (
        <div className="container my-4 con text-center shadow p-md-3">
          <div className="row shadow p-md-3">
            <div className="col-md-2 col-sm-0 shadow"></div>
            <div className="col-md-8 col-sm-12 shadow">
              {/* start maping from here */}

              <div className="card border-5 p-md-3">
                <h6 className="card-header text-center h1">﴿{surah_name}﴾</h6>
                <div className="card-body">
                  <h4 className="h2">{mapOverAyah}</h4>
                </div>

                {/* to here */}
              </div>
            </div>
            <div className="col-md-2 col-sm-0 shadow"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
