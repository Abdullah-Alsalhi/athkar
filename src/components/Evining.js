import React from 'react'
import athkar from '../thekr-json/athkar.json'

export default function Evining() {
  return (
    <div className=''>
      {athkar.filter(e => e.category === "أذكار المساء").map(e => { return (
        <div className='card text-center my-3'>
          <div className='card-header'>
            {e.reference}
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{e.category}</h5>
            <p className='card-text'>{e.zekr}</p>
            <div className='d-grid gap-2 col-6 mx-auto mt-4'>
            <button type='button' className='btn btn-success' onClick={(event)=> {

              if (event.target.innerText == "انتقل للذكر التالي") {
                
                event.target.disabled = true;
                return;
              }

              if (event.target.innerText == 0) {
                event.target.style = "background: #0a4c59";
                event.currentTarget.innerText = "انتقل للذكر التالي";
                return;
              }
              if (event.target.innerText == 1) {
                event.target.style = "background: #0a4c59";
              
              }
              event.target.innerText--;
            }}>{e.count}</button>
            </div>
          </div>
          <div class="card-footer text-muted">
              تجربة
          </div>
        </div>
      )})}
    </div>
  )
}
