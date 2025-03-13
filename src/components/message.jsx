import React , {Component} from "react";


class Message extends Component{

    constructor() {
        super();
        this.state = {
            name : 'user'
        }
    }

    changeState(){
        this.setState({
            name : 'Messi'
        })
    }

    render(){
        return(
            <div> 
              <h1>
              Hi, {this.state.name}  
             </h1>  
             <button onClick={() => this.changeState()}>Call the G.O.A.T </button>  
             </div>
        )
    }
}

export default Message;