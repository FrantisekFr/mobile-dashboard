import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import {Form, Button, FormText, Input, FormFeedback} from 'reactstrap';

export default class Key extends Component {

  state = {
    publicKey: '',
    privateKey: '',
    keysConfigured: false
  }

  setPublicKey = (event) => {
    this.setState({ publicKey: event.target.value })
  }

  setPrivateKey = (event) => {
   this.setState({ privateKey: event.target.value }) 
  }

  submitForm = (event) => {
    event.preventDefault();    
    if(this.state.publicKey !== "" && this.state.privateKey !== "") {
      this.setState({ keysConfigured: true })  
    }
  }

  render() {
    return (
      this.state.keysConfigured ? <Navigate to="/dashboard" replace={true} /> :
      <div className="auth-wrapper">
          <div className="auth-inner">
            <Form onSubmit={this.submitForm}>
              <h3>Configure API Keys</h3>
              <div className="mb-3">
                <label>Public Key</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Public Key"
                  value={this.state.publicKey}
                  onChange={event => this.setPublicKey(event)}                          
                /> 
              </div>
              <div className="mb-3">
                <label>Private Key</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Private Key"
                  value={this.state.privateKey}
                  onChange={event => this.setPrivateKey(event)}                          
                /> 
              </div>
              <div className="d-grid">
              <Button {...(this.state.publicKey !== "" && this.state.privateKey !== "" ? {enabled: true} : {disabled: true}) } type="submit">Submit</Button>                                             
              </div>        
          </Form>
        </div>
      </div>
    )
  }
}