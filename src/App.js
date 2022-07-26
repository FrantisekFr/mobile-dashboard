import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import './App.scss'

import Navigation from './components/navigation'
import Login from './components/login'
import SignUp from './components/signup'
import Key from './components/key'
import Dashboard from './components/dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
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