import React, { Component } from 'react';
import {
        BrowserRouter as Router,
        Route,
        Link
        } from 'react-router-dom';

import './App.css';
import Header from './components/headerComponent/header.js';
import Home from './components/pages/homePage.js';
import QuestionPage from './components/pages/questionPage.js';
import DB from './components/DB.js';



class App extends Component {

  
  render() {
    return (

      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/'component={Home} />
          <Route exact path='/QuestionPage'component={QuestionPage} /> 

      </div>
      </Router>
    );
  }
}

export default App;
