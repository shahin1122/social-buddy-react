import React from 'react';
import { useHistory } from 'react-router-dom';


const Post = (props) => {
    const { id , title , body} = props.post;
    const history = useHistory();
    const showComments = id =>{
        console.log('clicked');
         
        history.push(`post/${id}`);
    }
    return (
        
        <div className="post">
            <h2> <strong>ID: {id}</strong> {title}</h2>
            <p>{body}</p>
            <button onClick={()=> showComments(id)}>Show Comments</button>

            
        </div>
    );
};

export default Post;