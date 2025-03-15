import React from 'react'
import { useState } from 'react'
import styles from './ArrayState.module.css'

const ArrayState = () => {
   
    const [people , setPeople] = useState([])
    const [person , setPerson] = useState({
        name : '',
        username : '',
        age : null
    })

    

    const handleChange = (event) => {
        setPerson({...person,
            [event.target.name] : event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        setPeople([...people , person])
        
    }

  return (
    <> 
    <div>
        <h1>Add Person</h1>
         <form onSubmit={submitHandler}>
                  <div className={styles.formContainer}>
                    <div className={styles.formEntryContainer}>
                      <label htmlFor="name">Name</label>
                      <input 
                      type="text"
                      name = 'name'
                      value = {person.name}
                      onChange={handleChange} />
                      
                    </div>
                    <div className={styles.formEntryContainer}>
                      <label htmlFor="username">Username</label>
                      <input 
                      type="text"
                      name = 'username'
                      value = {person.username}
                      onChange={handleChange} />
                    </div>
                    <div className={styles.formEntryContainer}>
                      <label htmlFor="age">Age</label>
                      <input 
                      type="number" 
                      name = 'age'
                      value = {person.age}
                      onChange={handleChange} />
                    </div>
        
                    <button type = 'submit'>Submit</button>
                  </div>
        
                  
                </form>
    </div>
    <div>
        <h1>Display People</h1>
        <ul>
            {people.map((individual , index) => (
                <li key = {index}>
                    <div className={styles.personItem}>
                        <h2>{individual.name}</h2>
                        <p>Username: {individual.username}</p>
                        <p>Age: {individual.age}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default ArrayState