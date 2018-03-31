import React, { Component } from 'react';
import DB from './../DB.js';
import {

        Link
        } from 'react-router-dom';


class Home extends Component {	
   constructor(props) {
	  super(props);
	  
	  this.addQuestion = this.addQuestion.bind(this);
	  this.handleQuestionEditprInputChange = this.handleQuestionEditprInputChange.bind(this);
	  this.state = {
	  newQuestionBody:'',		 
	  }  
  }

  handleQuestionEditprInputChange(ev){
	  this.setState({
		newQuestionBody: ev.target.value  
	  })
	  
  }

  addQuestion(){
  	
  	var temp = new Object();
		temp.text = this.state.newQuestionBody;;
		temp.answers =[];

	DB.DB.push(temp);
	this.setState({
		newQuestionBody: ''
	})

  }

  render() {
    return (
      
        <div className="container">
        	{
        		DB.DB.map((text,i)=>{
        			return(
        				<div className="panel panel-default post-editor">
							<div className="panel-body">
								<Link to={"/QuestionPage/"+i}>{text.text}</Link> 

        							<div className="numOfAnsw">{text.answers.length} válasz a kérdésre<br/>
        								<button className="btn btn-success post-editor-button" >Töröl</button>
        							</div>
		
									
							</div>
						</div>
        				)

        		})
        	}
        	<textarea className="form-control post-editor-input" value={this.state.newQuestionBody} onChange={this.handleQuestionEditprInputChange}/>
        	<button className="btn btn-success new-post-button" onClick={this.addQuestion}>Új kérdés</button>
        </div>
      

    );
  }
}

export default Home;
