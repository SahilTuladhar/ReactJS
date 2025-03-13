import React, { PureComponent , Component } from 'react'
import PureComp from './PureComp.jsx'
import RegularComp from './RegularComp.jsx'
import MemoComp from './MemoComp.jsx';

export default class ParentComp extends Component {
   
  constructor(){
    super();
    this.state = { 
        name : 'Sahil'
    }
  }  

  componentDidMount(){
    setInterval(() => (
        this.setState({
            name : 'Sahil'
        })
    ) , 2000)
  }

  render() {
    
    console.log("********************Parent Component Render******************");
    

    return (
      <> 
      <div>ParentComp</div>
      {/* <PureComp name = {this.state.name} />
      <RegularComp name = {this.state.name} /> */}
      <MemoComp name = {this.state.name} />
      </>
    )
  }
}
