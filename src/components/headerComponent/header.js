import React, { Component } from 'react';

import {
        Link
        } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="homeLink">
        	<Link to="/">Home</Link> 
        </div>
      </header>

    );
  }
}

export default Header;
