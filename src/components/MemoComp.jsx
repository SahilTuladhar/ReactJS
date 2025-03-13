
import React from 'react'

const MemoComp = () => {
  
  console.log("MemoComponent Render");
  

  return (
    <div>MemoComp</div>
  )
}

export default React.memo(MemoComp)