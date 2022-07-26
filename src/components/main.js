import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

import {Signup} from "./signup";
import {Login} from "./login";
import {Navigation} from "./navigation";
import {Dashboard} from "./dashboard";


export default class Authentication extends Component {

  state = {
    authenticated: false;
  }

  let navigate = useNavigate();

  goToHomePage = () => {
    navigate("/");  
  }
  
  render() {

    const { page } = this.props.route;
    return (
      
    )
  }

}



