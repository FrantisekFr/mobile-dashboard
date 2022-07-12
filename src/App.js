import React from 'react'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './App.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signup'
import Key from './components/key'
import Dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="container">            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>                
                <li className="nav-item">
                  <Link className="nav-link" to={'/logout'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>        
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/configure-key" element={<Key />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" />
            </Routes>
        
      </div>
    </Router>
  )
}
export default App