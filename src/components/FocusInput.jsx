import React, { useRef } from 'react'
import Input from './Input'

const FocusInput = () => {
  
  const componentRef = useRef()
   
  const handleClick = () => {
    componentRef.current.focusInput()
  }

  return (
   <> 
      <div>FocusInput</div>
      <Input ref={componentRef} />
      <button onClick={handleClick}> Focus the Input </button>
   </>

  )
}

export default FocusInput