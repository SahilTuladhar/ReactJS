import React from 'react'
import { useState } from 'react';

const hocCounter = (WrappedComponent , incrementNumber) => {  // taking extra argument along with the component
  
  const NewComponent = (props) =>{
    
    const [count , setCount] = useState(0);

    const countHandler = () => {
      setCount((prevState) => {
          return prevState + incrementNumber  // use of parameter
      })
    }

    return <WrappedComponent count = {count} countHandler = {countHandler} {...props} />  // parameters that are passed to the Original wrappedcompoenet is spread out using ...props
  }
   
  return (
     NewComponent
  )
}

export default hocCounter