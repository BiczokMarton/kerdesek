import React, { Component } from 'react';
import {
        Link
        } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <header>
        <div className="home">
        	<Link to="QuestionPage">Itt lesznek a kérdések</Link>
        </div>
      </header>

    );
  }
}

export default Home;
