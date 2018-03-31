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
								<Link to={"/QuestionPage/"+i}>{text.text}</Link> 

        							<div className="numOfAnsw">{text.answers.length} válasz a kérdésre</div>
		
									<button className="btn btn-success post-editor-button" >Töröl</button>
							</div>
						</div>
        				)

        		})
        	}
        	
        	
        </div>
      

    );
  }
}

export default Home;
