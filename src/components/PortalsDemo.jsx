import React from 'react'
import ReactDOM from 'react-dom'

const PortalsDemo = () => {
  return ReactDOM.createPortal (
    <>
    <div>PortalsDemo</div>
    </> ,
    document.getElementById('modal-root')
  )
}

export default PortalsDemo