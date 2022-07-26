import React, { Component } from 'react'
import { Navigate, Link } from "react-router-dom";
import axios from 'axios';
import {Form, Button, FormText, Input, FormFeedback} from 'reactstrap';
import {storageSave, storageLoad} from "../storage";

export default class SignUp extends Component {

  state = {    
    email: "",
    password: "",        
    emailValid: false,
    failedRegistration: false,
    registrationCompleted: false
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
    this.setState({password: e.target.value}) 
  }

  submitRegistrationForm = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/signup',
      data: {        
        email: this.state.email,
        password: this.state.password
        }
      }
    )
    .then(response => {      
      if(response.error){
        this.setState({ failedRegistration: true, email: '', password: '' })
      } else {
        storageSave('klaviyoUser', response.data)  
        this.setState({ registrationCompleted: true })
      }
    })
    .catch(error => {
      console.error(error.response)
    })  
  }

  render() {
    return (
      this.state.registrationCompleted ? <Navigate to="/configure-key" replace={true} /> :
      
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Form onSubmit={this.submitRegistrationForm}>
              <h3>Sign Up</h3>        
              <div className="mb-3">
                <label>Email address</label>
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={e => this.validateEmail(e)}              
                  {...(this.state.email.length > 0 ? this.state.emailValid ? {valid: true} : {invalid: true} : "")} />     
                <FormFeedback{...(this.state.email.length > 0 ? this.state.emailValid ? {valid: true} : {invalid: true} : "")}>{this.state.emailValid ? "Valid email format" : "Invalid email format"}</FormFeedback>
              </div>
              <div className="mb-3">
                <label>Password</label>
                <Input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={e => this.handlePasswordInput(e)}  
                  placeholder="Enter password"
                />
              </div>
              <div>
                <Button {...(this.state.email !== "" && this.state.password !== "" && this.state.emailValid? {enabled: true} : {disabled: true}) } type="submit">Submit</Button>                    
              </div>
              <div className="row">
                {this.state.failedRegistration ? <FormText>Email already in use</FormText> : ""}
              </div>              
              <p className="forgot-password text-right">
                Already registered? <Link to={'/login'}>Login</Link>
              </p>
            </Form>
          </div>
        </div>
    )
  }
}