import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Post = () => {
    const postdetails=useLoaderData();
    const navi=useNavigate();
    const handlegoback=()=>{
        navi(-1)
    }
    return (
        <div className='text-center mt-10 space-y-3'>
            <h2>Details for posts</h2>
            <h1 className='text-3xl font-bold'>Title of the post:{postdetails.title}</h1>
            <p>Description:{postdetails.body}</p>
            <button onClick={handlegoback}>Go back</button>
          
        </div>
    );
};

export default Post;