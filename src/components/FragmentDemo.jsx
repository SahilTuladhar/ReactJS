import React from 'react'

const FragmentDemo = () => {

  const items = [ 1 , 2 , 3 ,4]

  return (
    <>
    <h1>Fragment Demo</h1>
    <p>Description Regarding the Fragment</p>
     {
        items.map((item , index) => (
            <React.Fragment key = {index}>
              <p>Item {item}</p>
            </React.Fragment>
        )) 
     }

    </>
  )
}

export default FragmentDemo