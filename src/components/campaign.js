import React, { Component } from 'react'
import DashboardNavigation from './dashboardnavigation'

export default class Campaign extends Component {
  render() {
    return (
      <div className="auth-wrapper dashboard">
        <div className="auth-inner auth-inner-dashboard">
      <DashboardNavigation/>
      <table className="table campaigns container">
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
      </div>
    )
  }
}