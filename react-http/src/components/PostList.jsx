import React, { Component } from 'react'
import axios from 'axios'
import Modal from './Modal'

class PostList extends Component {
  
constructor(props) {
  super(props)

  this.state = {
     posts : [],
     errorMsg: ''
  }
}

// Making the GET request 
 componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/post')
    .then(response => {
        this.setState({
            posts : response.data
        })
    })
    .catch(error => {
        this.setState({
            errorMsg: 'Error fetching posts'
        }) 
    })
 }
  
  render() {
    
    const {posts , errorMsg} = this.state

    return (
      <>
      <div>PostList</div>
      <ul>
      {posts.length ? 
      posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))
      : null}
      {errorMsg ? 
      <Modal>
        <p>{errorMsg}</p>
      </Modal>
      :null}
      </ul>
      </>
    )
  }
}


export default PostList
