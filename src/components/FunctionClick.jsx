import React from 'react'

const functionClick = () => {


const buttonHandler = () =>{
    console.log("Button clicked");
}

  return (
    <>
    <div>functionClick</div>
    <button onClick={buttonHandler}>Click Me</button>
    </>
  )
}

export default functionClick;