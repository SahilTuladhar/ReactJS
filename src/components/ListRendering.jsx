import React from 'react'
import Person from './Person'

const ListRendering = () => {

 const persons = [
    {
        id : 1,
        name : 'Messi',
        number : 10
    },
    
    {
        id : 2,
        name : 'Ozil',
        number : 11
    },
    
    {
        id : 3,
        name : 'Saka',
        number : 7
    }
 ]
 const namesList = persons.map((person) => 
<Person key = {person.id} userData = {person}/>
) 

  return (
    <div>
        <ul>
        {namesList}
        </ul>
    </div>
  )
}

export default ListRendering