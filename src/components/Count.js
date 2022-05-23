import React from 'react'

export default function Count(props) {
  const {name} = props
  console.log(name)
  return (
    <div className='Count'>Hello {name}</div>
  )
}
