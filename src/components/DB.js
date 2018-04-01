import React, { Component } from 'react';


class DB extends Component {
  constructor(){
    super()
    this.DB = [{text:"Mi az élet értelme?",
                 answers:["42","Nem tudom, de kösz a halakat!"]
                },

                {text:"Legyen e második tesztkérdés?",
                 answers:["Legyen","Ártani nem árthat","Talán még több válasz sem okoz különösebb gondot"]
                }
                ];
  }



}

export default (new DB);