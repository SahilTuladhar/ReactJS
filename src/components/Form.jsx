import React, { useState , useRef, useEffect} from 'react'
import stlyes from './Form.module.css'

const Form = () => {

  const [userObject , setUserObject] = useState([])
  const[input , setInput] = useState('')
  const[text , setText] = useState('')
  const[dropdown , setDropdown] = useState('React')
  
  // Creating a Ref instance
  const inputRef = useRef();

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const handleTextArea = (event) => {
   setText(event.target.value)
  }

  const handleDropdown = (event) => {
   setDropdown(event.target.value)
  }

  const submitForm = (event) => {

    const userObject = {
      name : input ,
      text : text ,
      dropdown : dropdown
    }
    alert(`User Added: ${JSON.stringify(userObject)}`)
  }


  useEffect(() => {
   inputRef.current.focus();
  } , [])

  return (
    <form onSubmit={submitForm}>
      <div className={stlyes.outerCover}>

<h1>My Form</h1>
<div className={stlyes.formContainer}>
  <div className={stlyes.formEntryContainer}>
    <label htmlFor="Username">Username</label>
    <input
     type="text" 
     value = {input} 
     onChange={handleInput} 
     ref = {inputRef} />
  </div>

  <div className={stlyes.formEntryContainer}>
    <label htmlFor="Comment">Comment</label>
    <textarea type="text" value = {text} onChange={handleTextArea} />
  </div>

  <div className={stlyes.formEntryContainer}>
    <label htmlFor="course">Course</label>
    <select value={dropdown} onChange={handleDropdown}>
      <option value="React">React</option>
      <option value="Angular">Angular</option>
      <option value="Vue">Vue</option>
      
    </select>
  </div>

  <button type='submit'>Submit</button>

</div>

</div>
    </form>
  )
}

export default Form