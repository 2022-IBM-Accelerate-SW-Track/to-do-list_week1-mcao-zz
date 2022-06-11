import React, { Component } from 'react';
import "./About.css";
import Learntoskate from "../assets/Learntoskate.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div class="split left">
            <div className="centered">
              <img 
              className="profile_image"
                src={Learntoskate}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
          <div className="centered">
            <div className="name_title">Welcome to FLTS! </div>
              <div className="brief_description">
                Free Learn to skate program for everyone!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}