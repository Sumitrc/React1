import React from 'react';
import  ReactDOM  from 'react-dom';
import CommentsDetail from './CommentsDetail.js';
import ApprovalCard from './ApprovalCard.js';
const App = () =>{
    return (
    <div className="ui container comments">
                <ApprovalCard>
                    Click which one you want
                </ApprovalCard>

        <ApprovalCard>
        <CommentsDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM"  
          text="Fabulus image"
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentsDetail 
           author="Alex" 
           timeAgo="Today at 3:25PM" 
           text="Good one"
        /></ApprovalCard>
                <ApprovalCard>
        <CommentsDetail 
           author="Jeen" 
           timeAgo="Today at 5:00PM" 
           text="Nice image"
        />
                        </ApprovalCard>

    </div>
    );
};
ReactDOM.render(<App/>,document.querySelector('#root'));