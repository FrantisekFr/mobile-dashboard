import React, { Component } from 'react'
import axios from 'axios';
import {Form, Input, FormFeedback} from 'reactstrap';
import {storageSave, storageLoad} from "../storage"

export default class Login extends Component {

  state = {   
    password: "",
    email: "",
    invalidLogin: true
  }  

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value })
  }

  submitLoginForm = (event) => {    
    event.preventDefault();    
    axios({
      method: 'POST',
      url: 'www.placeholder.com',
      data: {        
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(response => {
      if (response.data.status == "success"){    
        storageSave('klaviyoJWT', response.data.auth_token)
      }      
    })
    .catch(error => {
      this.setState({email: "", password: "", invalidLogin: true});
    })  
  }
  
  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <Form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <Input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.handleEmailInput}
            value={this.state.email}                
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.handlePasswordInput}
            value={this.state.password} />            
        </div>
        
        <div className="d-grid">
          <a href="/dashboard" className="btn btn-primary">Submit</a>
        </div>
      </Form></div></div>
    )
  }
}