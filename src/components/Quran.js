import React, { useState } from 'react'
import axios from 'axios';
import athkar from '../thekr-json/athkar.json';
export default function Quran(props) {
  // const id = props.id;
  const [ayah, setAyah] = useState([]);
  const getSurah = () => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/9`)
      .then((response) => {
        setAyah(response.data.data.ayahs)
        console.log(response.data.data.ayahs)
        
      })
      .catch((err) => {
        console.log("ERR", err)
      })
  }
    const mapOverAyah = ayah.map((e,i) => {
      if (e.text.startsWith("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ")) {
          let bsm = e.text.slice(0,37);
          let first_aya = e.text.split("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ").join(' ');
          
          return (
            <>
            <p>
            {bsm}
            </p>
            {first_aya} ({e.numberInSurah}) 
            </>
            )
      }else{
        return (
          <>
           {e.text} ({e.numberInSurah}) 
          </>
          
        )
      }
      })
  return (
    <div className='text-center' >
      
            <div className='row' >
            <div className='col-md-12' >
                {/* start maping from here */}
            
                <div className='my-3 shadow thek-cont' >
                      <h6 className='my-3' onClick={getSurah}>
                        ء
                      </h6>
                      <div className='surah'>
                      {mapOverAyah}
                      </div>
                        
                      {/* to here */}
                </div>
              
            </div>
            </div>
          </div>
  )
}
