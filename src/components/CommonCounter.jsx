import React from 'react'
import { useState } from 'react'

const CommonCounter = (props) => {

  const [count , setCount] = useState(0)

  const incrementCount = () => {
     setCount((prevState) => {
        return prevState + props.step
     })
  }

  return (
    <>
    <div>
        {props.render(count , incrementCount)}
    </div>
    </>
  )
}

export default CommonCounter