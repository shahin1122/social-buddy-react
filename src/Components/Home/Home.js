import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts , setPost] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])


    return (
        <div>
            <h1>This is home</h1>
             <h3>The Number of post is : {posts.length}</h3>

            {
                posts.map(post => <Post key={Math.random()} post={post}></Post> )
            }

            
        </div>
    );
};

export default Home;