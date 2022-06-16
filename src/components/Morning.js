import React, {useState} from 'react'
import athkar from '../thekr-json/athkar.json'
export default function Morning() {
  const [counter, setCounter] = useState(0)
  console.log(counter)
  return (
    <div className=''>
      {athkar.map(e => { return (
        <div className='card text-center my-3'>
          <div className='card-header'>
            {e.reference}
          </div>
          <div className='card-body'>
            <h5 className='card-title'>{e.category}</h5>
            <p className='card-text'>{e.zekr}</p>
            <div className='d-grid gap-2 col-6 mx-auto mt-4'>
            <button type='button' className='btn btn-success' >{e.count}</button>
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
