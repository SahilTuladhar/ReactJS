import React, { useState } from 'react'
import hocCounter from './hocCounter'

const HoverCounterTwo = (props) => {

const {count , incrementCount , name , number} = props

  return (
    
    <> 
     <h1 onMouseOver={incrementCount}>{name}{number} Hovered Count: {count}</h1>
    </>
  )
}

export default HoverCounterTwo