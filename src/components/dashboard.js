import React, { Component } from 'react'

export default class Dashboard extends Component {
  
  render() {
      
    return (
      <div className="auth-wrapper">
          <div className="auth-inner auth-inner-dashboard">
      <div className="dashboard">
          <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid">
            <ul className="dashboard-navbar navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="">Campaigns</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Activity</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Profiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Settings</a>
              </li>
            </ul>
          </div>
          </nav>
      <table className="table campaigns">
        <thead>
          <tr>
            <th scope="col">Campaign</th>
            <th scope="col">Opens</th>
            <th scope="col">Clicks</th>
            <th scope="col">Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Campaign 1</th>
            <td>1111</td>
            <td>1111</td>
            <td>1111</td>
          </tr>
          <tr>
            <th scope="row">Campaign 2</th>
            <td>2222</td>
            <td>2222</td>
            <td>2222</td>
          </tr>
          <tr>
            <th scope="row">Campaign 3</th>
            <td>3333</td>
            <td>3333</td>
            <td>3333</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div></div>
    )
  }
}