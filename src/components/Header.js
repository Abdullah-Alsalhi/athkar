import "./Header.css";
import React, { useState, useEffect } from "react";
import nawawi from "../thekr-json/nawawi.json";
import axios from "axios";
import { toArabic } from "arabic-digits";
import Buttons from "./Buttons";
export default function Header() {
  const [random_ayah, setRandom_ayah] = useState([]);
  const dailyAyah = () => {
    const ayah_id = Math.floor(Math.random() * 6236);
    axios
      .get(`https://api.alquran.cloud/v1/ayah/${ayah_id}`)
      .then((resposne) => {
        setRandom_ayah(resposne.data.data);
      });
  };
  let ayah_ran, surah_name, ayah_number_in_surah;
  try {
    ayah_ran = random_ayah.text;
    surah_name = random_ayah.surah.name;
    ayah_number_in_surah = toArabic(random_ayah.numberInSurah);
  } catch (error) {
    console.log(error.name);
  }
  useEffect(() => {
    dailyAyah();
  }, []);

  return (
    <div className="text-center mt-3 container-fluid">
      <div className="ayah-random shadow p3 rounded-2">
        <p>
          ﴿{ayah_ran}﴾{" "}
          <span className="ayah-ref">
            (آية {ayah_number_in_surah} من {surah_name})
          </span>
        </p>
      </div>

      <div className="mt-3 shadow rounded-2">
        <div className="row ">
          <div className="col-md-12">
            <h6 className="mokhtarat p-1 rounded-1">
              مختارات من اﻷربعين النووية
            </h6>
          </div>
          <div className="hadith-text">
            <p>{nawawi[Math.ceil(Math.random() * 42)].hadith}</p>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}
