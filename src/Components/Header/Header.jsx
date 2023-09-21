import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>
                <nav className='space-x-3 text-center'>
                <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                   
                   <NavLink to="/contact">Contact</NavLink>
                   <NavLink to="/users">Users</NavLink>
                   <NavLink to='/posts'>Posts</NavLink>
                   
                    
                </nav>
            </h2>
        </div>
    );
};

export default Header;