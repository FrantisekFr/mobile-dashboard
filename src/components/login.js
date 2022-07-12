import React, { Component } from 'react'

export default class Login extends Component {
  
  render() {

    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
        <div className="d-grid">
          <a href="/dashboard" className="btn btn-primary">
           Submit</a>
        </div>
      </form></div></div>
    )
  }
}