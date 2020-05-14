import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';
import polls from './PollsFetch';


function compare_item(a, b){
   
    if(a.id < b.id){
            return -1;
    }else if(a.id > b.id){
            return 1;
    }else{
       
              return 0;
        
    }
}


//this the actual represenation of data in our web page
function ShowData(){
   
    if(polls.length!==0){
        polls.sort(compare_item);
        return(
       
    <div>{
         
        polls.map((poll,index)=>{
            
              return(
             <div className="rag">
             <div className="detail">  Poll {index+1} </div>
             <div className="btn">
             <Link to={`/pollvote/${poll.id}`} ><button >Vote</button></Link>
             
             </div>
             </div>
            );
        })
        }
        </div>
      );
    }

    else{
       return(<div>
           <h3>NO POLL TO DISPLAY </h3></div>
       
    
    );
}  

}


class ShowPolls extends Component {
    
      
         
         
         render(){
         return (
             <div>
            <Link to={'/addpoll'} ><button>Add Poll</button></Link>
            <hr></hr>
            <br></br>
            <div className="container">
             <ShowData />
             </div>
             </div>
         );
     }

    

   
};

export default withRouter( ShowPolls);