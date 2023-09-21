import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const users=useLoaderData()
    return (
        <div>
            <p className='text-center'>This is for our users</p>
            <p className='text-center'>Total users:{users.length}</p>
            <div className='grid grid-cols-3 gap-6'>
                {
                    users.map((user)=>(
                        <div key={user.id} className='border-2 p-8 rounded-lg'>
                        <h1 className='text-lg font-bold '>Name:{user.name}</h1>
                        <p>Email:{user.email}</p>
                        <Link to={`/user/${user.id}`}>Show details</Link>
                        <br />
                        <Link to={`/user/${user.name}`}>Show more details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;