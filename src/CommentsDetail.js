import React from 'react-dom';

const CommentsDetail= props =>{
    return(
<div className="ui container comments">
        <div className="comment">
            <a href='/' className="avatar">
<img alt="avatar" src=""/>
                            </a>
            <div className="content">
                <a href='/' className="author">
                    {props.author}
                </a>
        <div className="metadata">
            <span className="date">
                {props.timeAgo}
            </span>
        </div>
        <div className="text">{props.text}</div>
            </div>
        </div> 
    </div>
    );
};
export default CommentsDetail;