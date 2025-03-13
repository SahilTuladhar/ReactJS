 import React, { Component } from 'react'
 
 class LifecycleB extends Component {

   constructor(){
    super();
    this.state = {
        name : 'Sahil'
    }

    console.log('Lifecycle B Constructor');
    
   }

   static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B getDerivedStateFromProps");
    return null
   }

   componentDidMount() {
    console.log("LifeCylce B componentDidMount");
    
   }

   shouldComponentUpdate(){
    console.log('Lifecycle B shouldComponentUpdate');
    return true;
   }

   getSnapshotBeforeUpdate(prevProps , prevState){
    console.log(('Lifecycle B getSnapshotBeforeUpdate'));
    return null
   }

   componentDidUpdate(prevProps , prevState , snapshot){
    console.log("LifeCycle B componentDidUpdate");
    
   }

   render() {
    console.log('LifeCycle B render');
    
     return (
       <div>LifecycleB</div>
     )
   }
 }
 
 export default LifecycleB
