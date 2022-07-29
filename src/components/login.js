import React, { Component } from 'react'
import { Navigate, Link } from "react-router-dom";
import {Form, Button, FormText, Input, FormFeedback} from 'reactstrap';
import axios from 'axios';
import {storageSave, storageLoad} from "../storage";
import { authenticateUser } from '../authenticate'

export default class Login extends Component {

  state = {   
    password: "",
    email: "",
    invalidLogin: false,
    emailValid: false,
    authorized: false
  }  

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
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

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value })
  }

  submitLoginForm = (event) => {    
    event.preventDefault();    
    axios({
      method: 'POST',
      url: 'http://localhost:3000/auth/signin',
      data: {        
          email: this.state.email,
          password: this.state.password            
        }                
      }
    )
    .then(response => {
      if (response.data.email && response.data.id){    
        storageSave('klaviyoUser', response.data.email);
        this.setState( {authorized: true }) 
      }      
    })
    .catch(error => {
      this.setState({email: "", password: "", invalidLogin: true});
    })  
  }
  
  componentDidMount() {
    this.setState({ authorized: authenticateUser() })   
  }

  render() {
    return (
       this.state.authorized ? <Navigate to="/campaigns" replace={true} /> :
      
      <div className="auth-wrapper">
          <div className="auth-inner">
         
            <Form onSubmit={this.submitLoginForm}>
              <h3>Login</h3>
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
                  placeholder="Enter password"
                  onChange={this.handlePasswordInput}
                  value={this.state.password} />            
              </div>
              <div>
                <Button {...(this.state.email !== "" && this.state.password !== "" ? {enabled: true} : {disabled: true}) } type="submit">Submit</Button>                    
              </div>
              <div className="row">
                {this.state.invalidLogin ? <FormText>Invalid username or password</FormText> : ""}
              </div>
              <p className="switch-forms text-right">
                Don't have an account yet? <Link to={'/sign-up'}>Sign Up</Link>
              </p>              
            </Form>
          </div>
        </div>
    )
  }
}