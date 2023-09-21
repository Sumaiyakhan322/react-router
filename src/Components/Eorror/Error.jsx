import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Not found:oppps!!!!!</h1>
           <p>{error.statusText || error.message}</p>
           {
            error.status===404 && <div>
                <h3>the page not found</h3>
            </div>
           }
           <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default Error;