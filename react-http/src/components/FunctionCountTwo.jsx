import React from 'react'
import { useState } from 'react';

const FunctionCountTwo = () => {

  const initialCount = 0
  const [count, setCount] = useState(initialCount);
  
    const incrementCount = () => {
       setCount(prevCount => prevCount + 1);
     }

     const decrementCount = () => {
       setCount(prevCount => prevCount - 1);
     }

     const resetCount = () => {
        setCount(initialCount)
     }
  
  
    return (
      <> 
       <div>Function Counter : {count}</div>
       <button onClick={incrementCount}>Increment Me</button>
       <button onClick={decrementCount}>Decrement Me</button>
       <button onClick={resetCount}>Reset Me!!</button>
      </>
    )
}

export default FunctionCountTwo