import React, { Component } from 'react'

class Counter extends Component {
  
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    incrementCount(){
        // this.setState({
        //     count : this.state.count + 1  // async task  
        // } , () => {console.log('Callback count:',this.state.count); //using a callback function 
        // })

        this.setState((prevState)=>({
         count : prevState.count + 1
        }))

        console.log('async count:',this.state.count) // synchronous task so operated first  
    }

    incrementFive(){
        
      this.setState((prevState) => ({
        count : prevState.count + 5
      }))
        
    }

  render() {

    // Destructuring the state component

    const {count} = this.state

    return (
      <div>
        <h1>Counter : {count}</h1>
        <button onClick={() => this.incrementFive()}>Increment the Counter by 5</button>
      </div>
    )
  }
}

export default Counter