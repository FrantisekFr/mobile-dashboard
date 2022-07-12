import React, { Component } from 'react'
export default class Key extends Component {
  render() {
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
        <h3>Configure API Keys</h3>
        <div className="mb-3">
          <label>Public Key</label>
          <input
            type="password"
            className="form-control"
            placeholder="Public API Key"
          />
        </div>
        <div className="mb-3">
          <label>Private Key</label>
          <input
            type="password"
            className="form-control"
            placeholder="Private API Key"
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