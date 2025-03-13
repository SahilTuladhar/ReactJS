 import React, { Component } from 'react'
 import LifecycleB from './LifecycleB';
 
 class LifecycleA extends Component {

   constructor(){
    super();
    this.state = {
        name : 'Sahil'
    }

    console.log('Lifecycle A Constructor');
   }

   changeState = () =>{
    this.setState({
        name : 'Sahil Ratna Tuladhar'
    })
   }

   static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null
   }

   componentDidMount() {
    console.log("LifeCylce A componentDidMount");
   }

   shouldComponentUpdate(){
    console.log('Lifecycle A shouldComponentUpdate');
    return true;
   }

   getSnapshotBeforeUpdate(prevProps , prevState){
    console.log(('Lifecycle A getSnapshotBeforeUpdate'));
    return null
   }

   componentDidUpdate(prevProps , prevState , snapshot){
    console.log("LifeCycle A componentDidUpdate");
    
   }

   render() {
    console.log('LifeCycle A render');
    
     return (
       <>
       <div>LifecycleA</div>
       <LifecycleB />
       <button onClick={this.changeState}> Change State</button>
       </>
     )
   }
 }
 
 export default LifecycleA
