import React , {Component} from "react";

class Introduction extends Component{
  
  constructor(){
    super();
    this.state = {
      user : 'Guest'
    }
  }

  displayUser(){
    this.setState({
      user : 'John'
    })

    console.log("ButtonClicked");
    
  }

 render() {                             //props is accessed through the this keyword
  
  const {user} = this.state

  const {name} = this.props
    return(
    <div>
      <h1>Hi this is {name} </h1>
      <h2>This account belongs to {user} </h2>
      <p>{this.props.children}</p>
      <button onClick={() => this.displayUser()}> Display Username </button>
    </div>
    );
 }
}

export default Introduction;
