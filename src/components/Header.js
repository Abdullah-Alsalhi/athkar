import React from "react";
import nawawi from "../thekr-json/nawawi.json";

export default function Header() {
  return (
    <div className="mt-5 text-center ">
      <h3>
        ﴿ الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا
        بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴾ [ الرعد: 28]
      </h3>
      <div class="card-body shadow">
        <div class="row">
          <div class="col-md-12">
            <h4 style={{ margin: "16px 0px" }}>مختارات من اﻷربعين النووية</h4>
          </div>
          <p>{nawawi[Math.ceil(Math.random() * 42)].hadith}</p>
        </div>
      </div>
    </div>
  );
}
