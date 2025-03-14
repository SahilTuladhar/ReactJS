import React, { useState } from 'react'
import hocCounter from './hocCounter';

const ClickCounter = (props) => {

   const {count} = props;
   const {countHandler} = props;
   const {name , number} = props

  return (
    <>
   {name}{number} <div>Count : {count}</div>
    <button onClick = {countHandler}>Increment Count</button>
    </>
  )
}

export default hocCounter(ClickCounter , 10)