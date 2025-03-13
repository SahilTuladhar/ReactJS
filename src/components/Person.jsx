import React from 'react'

function Person(props) {

const {userData , key} = props

  return (
    <>
         <li key = {key}>{userData.name} has the jersey number {userData.number}</li>

    </>
  )
}

export default Person