import React, { Component } from 'react'
import { UserContextConsumer } from './ContextProvider'
import { ThemeContextConsumer } from './ThemeContext'

class ComponentC extends Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
            ({theme , themeHandler}) => (
                <UserContextConsumer>
                    {
                        (username) => {

                            return(
                                <> 
                                <h1>Hi {username} , From Component C which has theme : {theme}</h1>
                                <button onClick={themeHandler}>Toggle Theme</button>
                                </>
                            )
                        }
                    }
                </UserContextConsumer>
             ) 
        }
      </ThemeContextConsumer>
    )
  }
}

export default ComponentC
