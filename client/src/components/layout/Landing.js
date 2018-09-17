import React, { Component } from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/Logos/logo.png';

import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing box">
          <div>
            <h1 id="toptext" className="display-1">~ Love One Another ~</h1>
            <img className="logo" src={logo} alt="logo" />
            <h1 id="bottomtext" className="display-1">Building LOVING Communities...</h1>
          </div>
        </div>
</div>
    );
  }
}

export default Landing;
