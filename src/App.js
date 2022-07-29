import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import '../node_modules/bootstrap/scss/bootstrap.scss'
import './App.scss'

import MainNavigation from './components/mainnavigation'
import Login from './components/login'
import SignUp from './components/signup'
import Key from './components/key'
import Campaign from './components/campaign'
import Activity from './components/activity'

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavigation/>        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/logout" />
          <Route path="/configure-key" element={<Key />} />
          <Route path="/campaigns" element={<Campaign />} />
          <Route path="/activity" element={<Activity />} />          
        </Routes>        
      </div>
    </Router>
  )
}
export default App