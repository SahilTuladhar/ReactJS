import React, { Component } from "react";
import styles from './PostForm.module.css'
import axios from "axios";

class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userId : null,
       title : '',
       body : ''
    }
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    axios.
    post('https://jsonplaceholder.typicode.com/posts' , this.state)
    .then(response => 
        {console.log(response)})
    .catch(error => {console.log(error)}
    )

    // console.log(this.state);
    
  }

  render() {

    const {userId , title , body} = this.state

    return (
      <>
        <h1>User Information Form</h1>
        <form onSubmit={this.submitHandler}>
          <div className={styles.formContainer}>
            <div className={styles.formEntryContainer}>
              <label htmlFor="userId">UserID</label>
              <input 
              type="text"
              name = 'userId'
              value = {userId}
              onChange={this.handleChange} />
              
            </div>
            <div className={styles.formEntryContainer}>
              <label htmlFor="title">Title</label>
              <input 
              type="text"
              name = 'title'
              value = {title}
              onChange={this.handleChange} />
            </div>
            <div className={styles.formEntryContainer}>
              <label htmlFor="body">Body</label>
              <textarea 
              type="text" 
              name = 'body'
              value = {body}
              onChange={this.handleChange} />
            </div>

            <button type = 'submit'>Submit</button>
          </div>

          
        </form>
      </>
    );
  }
}

export default PostForm;
