import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom' 
import polls from './PollsFetch';


function storePollInLocalStorage(pID,res,ques,e) {
       polls.forEach(function(pol, index){
        console.log(pol.id);
        if((pID) ===(pol.id)){
          polls.splice(index, 1);
        }
    });

    const poll={
      id:pID,
      answers:res,
      question:ques
    }
    polls.push(poll);
  
    localStorage.setItem('polls', JSON.stringify(polls));
}

class PollVote extends Component{
    constructor(props){
      super(props);

      this.state={
           Voted:false,
           result:[{
             answer:'',
             vote:''
           }],
           answerId:''
     }
     this.onSiteChanged = this.onSiteChanged.bind(this);
        
    }

    onSiteChanged(e) {
      e.preventDefault();
      if(this.state.Voted){
        alert("you have already voted");
        return ;
      }
      const id=this.props.poll.id;
      const ans=this.props.poll.answers;
      const question=this.props.poll.question;
      
      const res=ans.map((a)=>{
            if(a.id==e.currentTarget.value){
              a.vote+=1;
              
            }
            return a
            
       });

        console.log(res);

      this.setState({
        answerId: e.currentTarget.value,
        Voted:true,
        result:res
        });
         console.log(this.state);

         storePollInLocalStorage(id,res,question);

     
    }



     render(){
      var answerRows = this.props.poll.answers.map((answer)=>{
        return (
            <tbody>
                 <tr>
                     <td><input type="radio" name="answer" 
                                value={answer.id} 
                                checked={this.state.answerId === answer.id} 
                                onChange={this.onSiteChanged} />{answer.answer}</td>                            
                 </tr>
            </tbody>
        );
    });
    return (
      <div>
        <table className="table">
            <thead>
                <tr>
                    <th>{this.props.poll.question}</th>                           
                </tr>
            </thead>
             {answerRows}
            <tfoot>
                <tr>
                    <td>{
                    this.state.result.map(res=>{
                       return(
                       <div>{res.answer}  {res.vote}</div>
                       );
                    })
                    
                    } </td>                         
                </tr>
            </tfoot>
        </table>
      <Link to={'/polls'}><button>Back to home page</button></Link>
        </div>
    );

     }

    





};



export default withRouter(PollVote);