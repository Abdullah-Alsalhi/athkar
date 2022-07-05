import React, { useState, useEffect } from "react";
import nawawi from "../thekr-json/nawawi.json";
import axios from "axios";
import { toArabic } from "arabic-digits";
export default function Header() {
  const [random_ayah, setRandom_ayah] = useState([]);
  const dailyAyah = () => {
    const ayah_id = Math.floor(Math.random() * 6236);
    axios
      .get(`https://api.alquran.cloud/v1/ayah/${ayah_id}`)
      .then((resposne) => {
        // console.log(resposne.data.data)
        setRandom_ayah(resposne.data.data);
      });
  };
  let ayah_ran, surah_name, ayah_number_in_surah;
  try {
    ayah_ran = random_ayah.text;
    surah_name = random_ayah.surah.name;
    ayah_number_in_surah = toArabic(random_ayah.numberInSurah);
  } catch (error) {
    console.log("error");
  }
  useEffect(() => {
    dailyAyah();
  }, []);
  return (
    <div className="text-center">
      <div className="quran-font">
        <p
          style={{
            backgroundColor: "#297F87",
            fontSize: "20px",
            padding: "1%",
            borderRadius: "3px",
          }}
        >
          ﴿{ayah_ran}﴾{" "}
          <span>
            (آية {ayah_number_in_surah} من {surah_name})
          </span>
        </p>
      </div>

      <div className="my-5 card-body shadow">
        <div className="row">
          <div className="col-md-12">
            <h4 style={{ margin: "16px 0px" }}>مختارات من اﻷربعين النووية</h4>
          </div>
          <p>{nawawi[Math.ceil(Math.random() * 42)].hadith}</p>
        </div>
      </div>
    </div>
  );
}
