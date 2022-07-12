import React, { Component } from 'react'
import Campaign from './campaign'
import Activity from './activity'

export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      campaignsVisible: true,
      activityVisible: false
    };
  }
  showCampaigns = (e) => {
    e.preventDefault();
    this.setState({
      campaignsVisible: true,
      activityVisible: false
    });
    
  }

  showActivity = (e) => {
    e.preventDefault();
    this.setState({
      campaignsVisible: false,
      activityVisible: true
    });
    
  }

  render() {
      
    return (
      <div className="auth-wrapper">
        <div className="auth-inner auth-inner-dashboard">
          <div className="dashboard">
              <nav className="navbar navbar-expand dashboard-navbar">
                <div className="container-fluid">
                <ul className="navbar-nav">
                  <li className={"nav-item" + (this.state.campaignsVisible ? " active-tab" : "")}>
                    <a className="nav-link" href="" onClick={this.showCampaigns}>Campaigns</a>
                  </li>
                  <li className={"nav-item" + (this.state.activityVisible ? " active-tab" : "")}>
                    <a className="nav-link" href="" onClick={this.showActivity}>Activity</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/configure-key">Settings</a>
                  </li>
                </ul>
              </div>
              </nav>
              
              {this.state.campaignsVisible ? <Campaign/> : <></>}
              {this.state.activityVisible ? <Activity/> : <></>}              

            </div>
          </div>
      </div>
    )
  }
}