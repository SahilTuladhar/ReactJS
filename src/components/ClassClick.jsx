import React, { Component } from 'react'

export default class ClassClick extends Component {

    constructor(){
        super()
        this.state = {
            message : 'hello'
        }
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    buttonHandler() {
        console.log("Button clicked");
        this.setState({
            message : 'Goodbye'
        })
    }
  render() {
    
    const {message} = this.state;

    return (
      <div>
        <div>{message}</div>
        <button onClick={this.buttonHandler}>BYE</button>
      </div>
    )
  }
}
