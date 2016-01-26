import React, { Component, findDOMNode, PropTypes } from 'react';

export default class Header extends Component {

  render () {
    return (
      <div className="header">
        <div className="logo">
          Campanella
        </div>
        <div className="profile">
          <a className="animate-color" href="#">
            <i className="fa fa-gear"></i>
            Settings
          </a>
          <a className="animate-color" href="#">
            <i className="fa fa-user-secret"></i>
            DogLooksGood
          </a>
        </div>
        <div className="search">
          <input
            placeholder="Search everything here"
            type="text"/>
          <i className="fa fa-search"></i>
        </div>
      </div>
    );
  }
}
