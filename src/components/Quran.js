import React, { useState, useEffect } from "react";
import axios from "axios";
import { toArabic } from "arabic-digits";

export default function Quran() {
  // const id = 100;
  const [allSurah, setAllSurah] = useState([]);
  const [surah_id, setSurah_id] = useState(0);

  let pageNumber;
  const [surah_name, setSurah_name] = useState("");
  const [ayah, setAyah] = useState([]);
  const getSurah = (surah_id) => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${surah_id}`)
      .then((response) => {
        setSurah_name(response.data.data.name);
        setAyah(response.data.data.ayahs);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };
  const mapOverAyah = ayah.map((e, i) => {
    if (e.text.startsWith("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ")) {
      let bsm = e.text.slice(0, 37);
      let first_aya = e.text
        .split("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ")
        .join(" ");

      return (
        <>
          <p>{bsm}</p>
          {/* ﴿١﴾ */}
          {first_aya}{" "}
          <span
            style={{
              display: "inline-block",
              fontSize: "15px",
              backgroundColor: "#297F87",
              padding: "1px",
              borderRadius: "50%",
            }}
          >
            ﴿{toArabic(e.numberInSurah)}﴾
          </span>
          &nbsp;
        </>
      );
    } else {
      return (
        /*  */
        <>
          {e.text}{" "}
          <span
            style={{
              display: "inline-block",
              fontSize: "15px",
              backgroundColor: "#297F87",
              padding: "1px",
              borderRadius: "50%",
            }}
          >
            ﴿{toArabic(e.numberInSurah)}﴾
          </span>
          {e.page > pageNumber ? (
            <div className="mt-1 mb-0">
              <p
                style={{
                  display: "inline-block",
                  fontSize: "15px",
                  backgroundColor: "#297F87",
                  padding: "1%",
                  borderRadius: "35%",
                }}
              >
                {toArabic(e.page)}
              </p>
            </div>
          ) : (
            ""
          )}
          {e.page > pageNumber ? <hr /> : ""}&nbsp;
          <span style={{ display: "none" }}>{(pageNumber = e.page)}</span>
        </>
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
      <div className="container my-0">
        <div className="row">
          <div className="col">
            <button
              type="button"
              class="btn btn-link"
              value={surah.number}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              onClick={(event) => {
                setSurah_id(Number(event.target.value));
                getSurah(Number(event.target.value));
              }}
            >
              {toArabic(surah.number)}-{surah.name}
            </button>
          </div>
        </div>
      </div>
    );
  });
  /* END OF CHOSEN SURAH NUMBER */
  /* {mapOverAllSurahs} */

  return (
    <>
      {/* accordian start */}
      <div class="accordion " id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              style={{ background: "#0a4c59" }}
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
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body " style={{backgroundColor: "#395B64"}}>{mapOverAllSurahs}</div>
          </div>
        </div>
      </div>
      {/* accordian end */}
      {/* maping start here over the surah ayat */}
      {surah_id ? (
        <div className="text-center ">
          <div className="row">
            <div className="col-md-12">
              {/* start maping from here */}

              <div className="my-3 shadow thek-cont ">
                <h6
                  className="my-3 bg-surah_name"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#297F87",
                    padding: "1%",
                    borderRadius: "3px",
                  }}
                >
                  ﴿{surah_name}﴾
                </h6>
                <div className="surah ">
                  <h4 className="quran-font ">{mapOverAyah}</h4>
                </div>

                {/* to here */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
