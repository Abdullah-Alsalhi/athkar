import React from 'react'

export default function Count(props) {
  const {times} = props
  return (
    <div className='Count'>
      <button>countdown {times}</button>
      <a href="" id="cat-1" class="btn btn-success active btn-full-width catlink">
        <span class="catbutton arabicfont">أذكار الصباح</span>
      </a>
    </div>
  )
}
