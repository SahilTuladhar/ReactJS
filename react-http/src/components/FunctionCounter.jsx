import React from 'react'
import { useState } from 'react';

const FunctionCounter = () => {
  
   const [count, setCount] = useState(0);

  const incrementCount = () => {
     setCount(prevCount => prevCount + 1);
   }


  return (
    <> 
     <div>Function Counter : {count}</div>
     <button onClick={incrementCount}>Increment Me</button>
    </>
  )
}

export default FunctionCounter