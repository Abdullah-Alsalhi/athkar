import React, { useState, useEffect } from "react";
import axios from "axios";
import { toArabic } from "arabic-digits";

export default function Quran(props) {
  // const id = props.id;
  const [surah_name, setSurah_name] = useState("");
  const [ayah, setAyah] = useState([]);
  const getSurah = () => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/2`)
      .then((response) => {
        setSurah_name(response.data.data.name);
        setAyah(response.data.data.ayahs);
        // console.log(response.data.data.ayahs)
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
          {first_aya} ({toArabic(e.numberInSurah)})&nbsp;
        </>
      );
    } else {
      return (
        /*  */
        <>
          {e.text} ({toArabic(e.numberInSurah)}) &nbsp;
        </>
      );
    }
  });

  /* useEffect(()=>{
    getSurah();
  },[]); */
  return (
    <div className="text-center">
      <div className="row">
        <div className="col-md-12">
          {/* start maping from here */}

          <div className="my-3 shadow thek-cont">
            <h6 className="my-3" onClick={getSurah}>﴿
              {surah_name}﴾
            </h6>
            <div className="surah">
              <h4 className="quran-font">{mapOverAyah}</h4>
            </div>

            {/* to here */}
          </div>
        </div>
      </div>
    </div>
  );
}
