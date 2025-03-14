import React, { Component } from 'react'
import Modal from './Modal';



class ErrorBoundary extends Component {
 
    constructor(props) {
        super(props)
      
        this.state = {
           hasError : false,
           errorInfo : null,
        }

      
      }
      
      static getDerivedStateFromError(error){
          return { hasError: true };
      }
      
      componentDidCatch(error , info){
         
        this.setState({
            errorInfo: info
        })
        
      }



  render() {

    console.log(this.state.errorInfo);
    
    return (
      <>
      { this.state.hasError ? 
        (<Modal>
            <p>Something went wrong</p>
         {/* <pre>{JSON.stringify(this.state.errorInfo ,null , 2)}</pre> */}
        </Modal>)
        :(this.props.children)}
      </>
    )
  }
}

export default ErrorBoundary
