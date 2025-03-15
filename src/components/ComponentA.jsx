import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { UserContextConsumer } from './ContextProvider'

class ComponentA extends Component {
  render() {
    return (
      <UserContextConsumer> 
        {
            (username) => {
                return (
                    <div>
            <h1>Hey {username}, from Component A </h1>
            <ComponentB/>
          </div>
                )
            }
        }
      </UserContextConsumer>
    )
  }
}

export default ComponentA
