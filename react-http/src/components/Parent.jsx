import React from 'react'
import Child from './Child';

const Parent = () => {
  
    const numbers = {
        name : 'Sahil',
        age : 23
        };

  return (
    <div><Child {...numbers}/></div>
  )
}

export default Parent