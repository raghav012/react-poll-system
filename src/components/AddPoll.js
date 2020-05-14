import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import polls from './PollsFetch';
import { v4 as uuidv4 } from 'uuid';


function storePollInLocalStorage(poll,e) {
    polls.push(poll);
    localStorage.setItem('polls', JSON.stringify(polls));
}
class AddPoll extends Component {
  state = {
    id:uuidv4(),
    answers: [{answer:"", vote:0,id:uuidv4()}],
    question: "",
    
  }
handleChange = (e) => {
    if (["answer"].includes(e.target.className) ) {
      let answers = [...this.state.answers]
      answers[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()

      this.setState({ answers }, () => console.log(this.state.answers))
      console.log(this.state.answers,'hi');
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }
addAnswer = (e) => {
    this.setState((prevState) => ({
      answers: [...prevState.answers, {answer:"", vote:0,id:uuidv4()}],
    }));
    console.log(this.state.cats);
    e.preventDefault();
  }
handleSubmit = (e) => { 
    console.log(this.state);
        e.preventDefault() 
       
       if(this.state.question.length<1){
         alert('pls enter something in question');
         return;
       }
       
       
        storePollInLocalStorage(this.state);
        console.log("i am here");
         this.props.history.push('/polls')
      }
render() {
    let {answers,question} = this.state;
    
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
         <Row className="form-group">
            <Col md={{size:8, offset: 2}}>
        <label htmlFor="question">Question</label> 
         </Col></Row>
         <Row className="form-group">
            <Col md={{size:8, offset: 2}}>
        <textarea  name="question" id="question" value={question} cols='100'
                   rows='2' maxlength = "105" />
        </Col></Row>
        <Row className="form-group">
            <Col md={{size:7, offset: 2}}>
        <Button onClick={this.addAnswer}>Add new answer</Button>
        </Col></Row>
        
        {
          answers.map((val, idx)=> {
            let answerId = `answer-{idx}`;
            return (
              <div key={idx}>
                 <Row className="form-group">
            <Col md={{size:8, offset: 2}}>
                <label htmlFor={answerId}>{`Answer ${idx + 1}`}</label>
                </Col></Row>
                <Row className="form-group">
            <Col md={{size:8, offset: 2}}>
                <textarea
                  name={answerId}
                  data-id={idx}
                  id={answerId}
                  value={answers[idx].answer} 
                  className="answer"
                  cols='100'
                   rows='2'
                />
               </Col>
              </Row>
              </div>
            )
          })
        }
        <Button type="submit" value="Submit" >Submit</Button> 
      </form>
    )
  }
      
};

export default withRouter(AddPoll);