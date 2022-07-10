// import "./Header.css";
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
    <div className="container  pt-5">


    <div className="row  justify-content-center align-items-center">

      <div className="col-lg-4 shadow p-3 ">
        <p className="text-center">
          ﴿{ayah_ran}﴾{" "}
          <span className="">
            (آية {ayah_number_in_surah} من {surah_name})
          </span>
        </p>
      </div>

      <div className="col-lg-1 mt-4"></div>

      <div className="col-lg-7 p-3 shadow">
        <h5 className="text-center ">
          مختارات من اﻷربعين النووية
        </h5>
        <p>{nawawi[Math.ceil(Math.random() * 42)].hadith}</p>
      </div>


      
    </div>
    <Buttons />
    </div>
  );
}
