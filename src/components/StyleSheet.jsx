import React, { useState } from 'react'
import './StyleSheet.css'

const StyleSheet = () => {
 const [primary , setPrimary] = useState(false)

 function buttonHandler(){
    {primary ? setPrimary(false) : setPrimary(true)}
 } 

 let classname = primary ? 'primary' : 'secondary'
  return (
    <div>
        <h1  className = {`${classname} font-xl` } >StyleSheet</h1>
        <button onClick={buttonHandler}>Change Color</button>
    </div>
  )
}

export default StyleSheet