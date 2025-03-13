
import React , {useState} from 'react'

const ConditionalRendering = () => {

  const [morning , setMorning] = useState(false)

const buttonClick = () => {
 (morning ? setMorning(false) : setMorning(true))
 }


 // creating a JS element Variable
 let message

 if(morning){
    message = <h1>Good Morning</h1>
 }else{
    message = <h1>Good Evening</h1>
 }



  return (
    <>

    {message}
    
    {/* Terning approach */}
    {/* {morning ? <h1>Good Morning!!</h1>: <h1>Good Evening!!</h1>} */}
    <button onClick={buttonClick}>Toggle</button>
    </>
  )
}

export default ConditionalRendering