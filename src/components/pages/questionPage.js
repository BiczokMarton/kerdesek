import React, { Component } from 'react';
import DB from '../DB.js';

class QuestionPage extends Component {
  render() {
    return (
      <div>
        <div className="home">
        	        	{
        		DB.DB.map((quest,i)=>{
              if(i==[this.props.match.params.Id]){
        			return(
                <div>
                <h2>{quest.text}</h2>
        				{quest.answers.map((answ,j)=>{
                  return(
                    <div className="panel panel-default post-editor">
                      <div className="panel-body">
                          <div key={j}>{answ}  </div>
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
        </div>
      </div>

    );
  }
}

export default QuestionPage;