import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

   constructor(){
    super();
    this.state = {
        message : 'Hello'
    }

    this.greetHandler = this.greetHandler.bind(this)
   }

   greetHandler(childParams){
     this.setState({
        message : `Hello by ${childParams}`
     } , 
     // callback function
    () => {
        alert(`${this.state.message}`)
    }
    )
     
   }


  render() {

    const {message} = this.state

    return (
      <div>
        <div>ParentComponent</div>
        <ChildComponent buttonProp = {this.greetHandler} />
      </div>
    )
  }
}
