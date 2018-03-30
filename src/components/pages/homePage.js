import React, { Component } from 'react';
import DB from './../DB.js';
import {
        Link
        } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      
        <div className="container">
        	{
        		DB.DB.map((text,i)=>{
        			return(
        				<div className="panel panel-default post-editor">
							<div className="panel-body">
        						<div key={i}>{text.text}  </div>
        							<div className="numOfAnsw">{text.answers.length}</div>
        						
							</div>
						</div>
        				)

        		})
        	}
        	<Link to="QuestionPage">Itt lesznek a kérdések</Link>
        	
        </div>
      

    );
  }
}

export default Home;
