import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import DashboardNavigation from './dashboardnavigation'

export default class Activity extends Component {
  render() {
    return (
      <div className="auth-wrapper dashboard">
       <div className="auth-inner auth-inner-dashboard">
          <DashboardNavigation/>    
          <div className="container activity-container">
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>John Doe</Accordion.Header>
                <Accordion.Body>
                <span>Recent Event Name</span>
                <ul>
                  <li>Event Attributes</li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>      
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}