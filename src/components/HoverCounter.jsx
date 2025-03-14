import React, { useState } from 'react'
import hocCounter from './hocCounter'

const HoverCounter = (props) => {

    const {count} = props;
    const {countHandler} = props;
    const {name , number} = props

  return (
    
    <> 
     <h1 onMouseOver={countHandler}>{name}{number} Hovered Count: {count}</h1>
    </>
  )
}

export default hocCounter(HoverCounter ,5)