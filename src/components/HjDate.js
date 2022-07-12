import React, {useState, useEffect} from 'react'
import axios from "axios";
import { toArabic } from 'arabic-digits';

export default function HjDate() {
  const [dateOfTodayHJ, setDateOfTodayHJ] = useState({});


  const getHJDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    console.log(day, month, year)
    axios
      .get(`http://api.aladhan.com/v1/gToH?date=${day}-${month}-${year}`)
      .then((resposne) => {
        setDateOfTodayHJ(resposne.data.data);
      })
      .catch((error)=>{
        console.log(error.name)
      })
  }

  useEffect(() => {
    getHJDate();
  }, [])

  let current_day_ar;
  let current_day_num;
  let current_month_ar;
  let current_year_ar;
  try {
  current_day_ar = dateOfTodayHJ.hijri.weekday.ar;
  current_day_num = dateOfTodayHJ.hijri.day;
  current_month_ar = dateOfTodayHJ.hijri.month.ar;
  current_year_ar = dateOfTodayHJ.hijri.year;
} catch (error) {
  console.log(new Error("Date not loaded"))
}

  return (
    <div className="h1 w-100 text-center shadow p-2">
      <p>{current_day_ar}-{toArabic(current_day_num)}-{current_month_ar}-{toArabic(current_year_ar)}</p>
    </div>
  )
}
