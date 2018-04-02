import React, { Component } from 'react';
import homeLogo from '../../home.jpg';

import {
        Link
        } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="homeLink">
        	<Link to="/"><img className="img-responsive" src={homeLogo} /></Link> 
        </div>
      </header>

    );
  }
}

export default Header;
