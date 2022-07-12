import React, { Component } from 'react'
import axios from 'axios';
import {Form, Input, FormFeedback} from 'reactstrap';
import {storageSave, storageLoad} from "../storage";

export default class SignUp extends Component {

  state = {    
    email: "",
    password: "",        
    emailValid: false
  }

  validateEmail = (e) => {     
    if(e){   
      let email = e.target.value.trim().toLowerCase();
      if (/^\S+@\S+\.\S+$/.test(email)) {
          this.setState({emailValid: true, email: email})        
      } else {
          this.setState({emailValid: false, email: email})
      }
    }
  }

  handlePasswordInput = (e) => {    
    if (e.target.value.length > 1){
      this.setState({password: e.target.value, passwordValid: true})
    } else{
      this.setState({password: e.target.value, passwordValid: false})
    }
  }

  submitRegistrationForm = (event) => {
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
      if(response.data.status == "success")      
      storageSave('klaviyoJWT', response.data.auth_token)
    })
    .catch(error => {
      console.error(error.response) 
    })  
  }

  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <Form>
        <h3>Sign Up</h3>        
        <div className="mb-3">
          <label>Email address</label>
          <Input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={e => this.validateEmail(e)}              
            {...(this.state.email.length > 0 ? 
              this.state.emailValid ? {valid: true} : {invalid: true} : "")}                  
            />     
          <FormFeedback{...(this.state.email.length > 0 ? 
                     this.state.emailValid ? {valid: true} : {invalid: true} : "")}>{this.state.emailValid ? "Valid email" : "Invalid email format"}</FormFeedback>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <a href="/configure-key" className="btn btn-primary">
           Submit</a>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </Form></div></div>
    )
  }
}