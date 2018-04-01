import React, { Component } from 'react';
import DB from '../DB.js';
import deleteIcon from '../../delete.png'
import {

        Link
        } from 'react-router-dom';

class QuestionPage extends Component {
   constructor(props) {
    super(props);
    
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswerEditprInputChange = this.handleAnswerEditprInputChange.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.editAnswer = this.editAnswer.bind(this);
    this.handleEditAnswerEditprInputChange = this.handleEditAnswerEditprInputChange.bind(this);
    this.editQuestion = this.editQuestion.bind(this);
    this.handleEditQuestionEditprInputChange = this.handleEditQuestionEditprInputChange.bind(this);
    this.state = {
    newAnswerBody:'',
    editedQuestionBody: '',   
    editedAnswerBody:'' ,
    editedAnswerRowIndex: 0,
    editedAnswerSubRowIndex: 0
    }  
  }

  handleEditQuestionEditprInputChange(ev){
    this.setState({
    editedQuestionBody: ev.target.value  
    })
  }

  handleEditAnswerEditprInputChange(ev){
    this.setState({
    editedAnswerBody: ev.target.value  
    })
  }

  handleAnswerEditprInputChange(ev){
    this.setState({
    newAnswerBody: ev.target.value  
    })
    
  }

  removeQuestion() {
   DB.DB.splice(this.props.match.params.Id, 1);
  }

  editQuestion() {
    DB.DB[this.props.match.params.Id].text=this.state.editedQuestionBody;
    this.setState({
    editedQuestionBody: ''
    })
  }

  addAnswer(){
    DB.DB[this.props.match.params.Id].answers.push(this.state.newAnswerBody);
    this.setState({
    newAnswerBody: ''
    })
  }

  removeAnswer(i,j) {
   DB.DB[i].answers.splice(j, 1);
  }
  
  setEditedAnswerIndex(i,j){
    this.setState({
      editedAnswerRowIndex: i,
      editedAnswerSubRowIndex: j
    })
  }
  editAnswer() {
    DB.DB[this.state.editedAnswerRowIndex].answers[this.state.editedAnswerSubRowIndex]=this.state.editedAnswerBody;
    this.setState({
    editedAnswerBody: ''
    })
  }

  render() {
    return (

        <div className="container">
        	        	{
        		DB.DB.map((quest,i)=>{
              if(i==[this.props.match.params.Id]){
        			return(
                <div className="container">
                <h2>{quest.text}</h2>
        				{quest.answers.map((answ,j)=>{
                  return(
                    <div className="panel panel-default post-editor">
                      <div className="panel-body">
                          <div key={j}>{answ}  <br/>
                             <button type="button" className="btn btn-info edit-answer-button" data-toggle="modal" data-target="#answerModal" onClick={()=>this.setEditedAnswerIndex(i,j)}>Válasz módosítása</button>
{/*--------------------Felugró modal----------------------------------------*/}
  <div className="modal fade" id="answerModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          
          <h4 className="modal-title">Válasz módosítása</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <textarea className="form-control answer-editor-input" value={this.state.editedAnswerBody} onChange={this.handleEditAnswerEditprInputChange}/>
        </div>
        <div className="modal-footer">
          <button className="btn btn-success new-post-button"  data-dismiss="modal" onClick={this.editAnswer}>Mentés</button>
        </div>
      </div>
    </div>
  </div>

{/*--------------------Felugró modal bezár----------------------------------------*/}

                            <Link to='#'><button className="btn btn-danger delete-answer-button" onClick={()=>this.removeAnswer(i,j)}>Válasz törlése</button></Link>
                          </div>

                      </div>
                     </div>

                          )

                      }
								    )
                  }
        						
            </div>
        				)}

        		})
        	}

          <textarea className="form-control post-editor-input" value={this.state.newAnswerBody} onChange={this.handleAnswerEditprInputChange}/>
           <div className="questionEditButtons">
          <button className="btn btn-success new-post-button" onClick={this.addAnswer}>Új válasz</button>
         
          <button type="button" className="btn btn-info edit-question-button" data-toggle="modal" data-target="#questionModal" onClick={this.editQuestion}>Kérdés módosítása</button>
                            
{/*--------------------Felugró modal----------------------------------------*/}
  <div className="modal fade" id="questionModal" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          
          <h4 className="modal-title">Kérdés módosítása</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <textarea className="form-control answer-editor-input" value={this.state.editedQuestionBody} onChange={this.handleEditQuestionEditprInputChange}/>
        </div>
        <div className="modal-footer">
          <button className="btn btn-success new-post-button"  data-dismiss="modal" onClick={this.editQuestion}>Mentés</button>
        </div>
      </div>
    </div>
  </div>

{/*--------------------Felugró modal bezár----------------------------------------*/}
          <Link to='/'><button className="btn btn-danger delete-question-button" onClick={this.removeQuestion}>Kérdés törlése</button></Link>
          </div>
        </div>


    );
  }
}

export default QuestionPage;