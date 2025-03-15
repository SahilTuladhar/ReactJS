import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserContextConsumer } from './ContextProvider.js'

class ComponentB extends Component {
  render() {
    return (

        <UserContextConsumer>
            {
                (username) => {
                    return(
                      <div>
                         <h1>Hello {username} from Component B</h1>
                        <ComponentC />
                      </div>)
                }
            }
        </UserContextConsumer>
      
    )
  }
}

export default ComponentB
