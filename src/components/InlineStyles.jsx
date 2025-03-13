import React, { useState } from 'react'


const primarys = {
    'color' : 'orange'
}

const secondary = {
    'color' : 'blue'
}

const InlineStyles = () => {
 const [primary , setPrimary] = useState(false)

 function buttonHandler(){
    {primary ? setPrimary(false) : setPrimary(true)}
 } 

 let classname = primary ? primarys : secondary
  return (
    <div>
        <h1 style={classname} >StyleSheet</h1>
        <button onClick={buttonHandler}>Change Color</button>
    </div>
  )
}

export default InlineStyles