import React from 'react';
import { useLoaderData } from 'react-router-dom';


const UsersMore = () => {
    const user=useLoaderData()
    return (
        <div>
            <h1>{user.id}</h1>
        </div>
    );
};

export default UsersMore;