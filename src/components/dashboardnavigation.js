import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class DashboardNavigation extends Component {

   render() {
      return (  
         <nav className="navbar navbar-expand" id="dashboard-navigation">
            <div className="container">
            <ul className="navbar-nav">
              <li className={"nav-item" }>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/campaigns'}>
                    Campaigns
                  </NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/activity'}>
                    Activity
                  </NavLink>
              </li>
              <li className={"nav-item"}>
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/configure-key'}>
                    Configure Keys
                  </NavLink>
                  </li>
            </ul>
          </div>
        </nav>
      )
  }
}