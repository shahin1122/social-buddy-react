import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id} = useParams();
    const [post , setPost]  = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setPost(data))

    },[id])
    return (
        <div>
            <h3>This is post detail : {id}</h3>
            <h3>{post.title}</h3>
            <p> <strong>{post.body}</strong> </p>
            
        </div>
    );
};

export default PostDetail;