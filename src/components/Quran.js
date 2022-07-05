import React, { useState, useEffect } from "react";
import axios from "axios";
import { toArabic } from "arabic-digits";

export default function Quran(props) {
  // const id = props.id;
  let pageNumber;
  const [surah_name, setSurah_name] = useState("");
  const [ayah, setAyah] = useState([]);
  const getSurah = () => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/5`)
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
          {first_aya} <span style={{display:"inline-block",fontSize: "15px", backgroundColor: "#297F87", padding: "1px", borderRadius: "50%"}}>({toArabic(e.numberInSurah)})</span>&nbsp;
        </>
      );
    } else {
      return (
        /*  */
        <>
          {e.text} <span style={{display:"inline-block",fontSize: "15px", backgroundColor: "#297F87", padding: "1px", borderRadius: "50%"}}>({toArabic(e.numberInSurah)})</span>{
            e.page > pageNumber ? <div className="mt-1 mb-0"><p style={{display:"inline-block",fontSize: "15px", backgroundColor: "#297F87", padding: "1%", borderRadius: "35%"}}>{toArabic(e.page)}</p></div> : ''
          }{e.page > pageNumber ? <hr/> : ""}&nbsp;
        <span style={{display: "none"}}>{pageNumber = e.page}</span>
        </>
        
      );
    }
  });

  useEffect(()=>{
    getSurah();
  },[]); 
  return (
    <div className="text-center">
      <div className="row" >
        <div className="col-md-12">
          {/* start maping from here */}

          <div className="my-3 shadow thek-cont" >
            <h6 className="my-3 bg-surah_name"  style={{display:"inline-block", backgroundColor: "#297F87", padding: "1%", borderRadius: "3px"}}>﴿
              {surah_name}﴾
            </h6>
            <div className="surah">
              <h4 className="quran-font" >{mapOverAyah}</h4>
            </div>

            {/* to here */}
          </div>
        </div>
      </div>
    </div>
  );
}
