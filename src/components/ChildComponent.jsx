import React from 'react'

const ChildComponent = (props) => {
  
    const {buttonProp} = props

  return (
    <>
    <div>ChildComponent</div>
    <button onClick={() => buttonProp('Child')}>Clicked from Children</button>
    </>

  )
}

export default ChildComponent