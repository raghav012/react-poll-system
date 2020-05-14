import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import polls from './PollsFetch';
import ShowPolls from './ShowPolls';
import PollVote from './PollVote';
import AddPoll from './AddPoll';




class Main extends Component {

  
    render() {
    const PollWithId = ({match}) => {
        const poll=polls.filter((poll) => (poll.id) ===(match.params.pollId))[0]
        console.log(poll);
        return(
          <PollVote poll={poll}  />
        );
      };


    return (
      <div>
       
        
              <Switch location={this.props.location}>
                  <Route exact path='/polls' component={ShowPolls} />
                  <Route exact path='/addpoll' component={AddPoll} />
                  <Route exact path='/pollvote/:pollId' component={PollWithId} />
                  <Redirect to="/polls" />
              </Switch>
          
      
      </div>
    );
  }
}
export default (Main);