import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authenticateUser } from '../authenticate'

export default class MainNavigation extends Component {

  state = {
    userLoggedIn: false
  }

  componentDidMount() {
    this.setState({ userLoggedIn: authenticateUser() })   
  }

   render() {
      return (  
         <nav className="navbar navbar-expand navbar-light fixed-top" id="main-navigation">
          <div className="container">            
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {!this.state.userLoggedIn ? 
                <>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/login'}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/sign-up'}>
                    Sign Up
                  </NavLink>
                </li> </>
                : ''}               
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={'/logout'}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
      )
  }
}