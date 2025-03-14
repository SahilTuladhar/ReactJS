import React, { useState } from 'react'
import hocCounter from './hocCounter';

const ClickCounterTwo = (props) => {

const {count , incrementCount , name , number} = props


  return (
    <>
   {name}{number} <div>Count : {count}</div>
    <button onClick = {incrementCount}>Increment Count</button>
    </>
  )
}

export default ClickCounterTwo