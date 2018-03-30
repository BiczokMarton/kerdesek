import React, { Component } from 'react';
import DB from './../DB.js';
import {
        Link
        } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      
        <div className="home">
        	{
        		DB.DB.map((text,i)=>{
        			return(
        				<p key={i}>{text.text}  {text.answers.length}</p>

        				)

        		})
        	}
        	<Link to="QuestionPage">Itt lesznek a kérdések</Link>
        	}
        </div>
      

    );
  }
}

export default Home;
