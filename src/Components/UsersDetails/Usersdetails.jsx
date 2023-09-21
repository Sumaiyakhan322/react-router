import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Usersdetails = () => {
    const user=useLoaderData();
    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>This is details for users</h1>
            <div>
                <h1 className='text-7xl text-center mt-20'>Name:{user.name}</h1>
            </div>
        </div>
    );
};

export default Usersdetails;
