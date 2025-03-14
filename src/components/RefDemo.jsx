import React, { Component } from 'react'

 class RefDemo extends Component {
  
  constructor(){
    super();
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef);
    
  }

  handleClick = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
     <> 
        <div>RefDemo</div>
        <input type="text" ref = {this.inputRef} />
        <button onClick={this.handleClick}> CLICK ME!!! </button>
     </>
    )
  }
}

export default RefDemo;