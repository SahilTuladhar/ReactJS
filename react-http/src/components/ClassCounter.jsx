import React, { Component } from 'react'

class ClassCounter extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  incrementCount = () => {
    this.setState((prevState) => (
      {count : prevState.count + 1}
    ))
  }

  render() {
   
    const {count} = this.state

    return (
   <>
      <div>Class Counter : {count}</div>
      <button onClick={this.incrementCount}>Increment Count</button>
   </>

    )
  }
}

export default ClassCounter