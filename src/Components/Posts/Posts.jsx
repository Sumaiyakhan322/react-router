import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Posts = () => {
    const posts=useLoaderData();
    const navigate=useNavigate();
    const handleShowDetails=()=>{
       posts.map(post=> navigate(`/post/${post.id}`))
       
       
    }
    return (
        <div>
           <h2>This is for posts</h2> 
           <div className='grid grid-cols-4 gap-3'>
            {
                posts.map(post=>(
                    <div key={post.id} className='border-4 p-6 rounded-lg flex flex-col'>
                        <h1 className='text-center'>UserId:{post.id}</h1>
                        <p className='flex-grow'>Details:{post.body}</p>
                        
                        <div className='p-4 border-3 bg-blue-300 w-5/12 rounded-lg text-center mx-auto mt-3'>
                        <Link to={`/post/${post.id}`}>Show details</Link>
                        </div>
                        <button onClick={handleShowDetails}>Show details with btn</button>
</div>
                   
                ))
            }
           </div>
        </div>
    );
};

export default Posts;