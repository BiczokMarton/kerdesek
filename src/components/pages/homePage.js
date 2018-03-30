import React, { Component } from 'react';
import DB from './components/DB.js';
import {
        Link
        } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      
        <div className="home">

        	<Link to="QuestionPage">Itt lesznek a kérdések</Link>
        	}
        </div>
      

    );
  }
}

export default Home;
