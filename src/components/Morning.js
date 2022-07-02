import React from 'react'
import athkar from '../thekr-json/athkar.json'
export default function Morning() {
  
  return (
    <div className='text-center'>
      
            <div className='row'>
            <div className='col-md-12'>

            {athkar.filter(e => e.category === "أذكار الصباح").map(e => {
              return (
                <div className='my-3 shadow my-4'>
                      <h6 className=''>
                        {e.reference}
                      </h6>
                      <p className=''>
                        {e.zekr}
                      </p>
                      <p className=''>
                        {e.description}
                      </p>
                      <button className='btn btn-success col-md-5 my-3' onClick={(event)=>{
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
              )
            })}
            </div>
            </div>
          </div>

  )
}
