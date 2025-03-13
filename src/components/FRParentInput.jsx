import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

  constructor(){
    super();
    this.inputRef = React.createRef()
  }

  handleClick =() => {
     this.inputRef.current.focus()
  }

  render() {
    return (
      <>
      <div>FRParentInput</div>
      <FRInput ref = {this.inputRef}/>
      <button onClick={this.handleClick}>Focus on the Button</button>
      </>
    )
  }
}


export default FRParentInput
