import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {    
    return (
        <div>
            <h3>this is home section</h3>
            <Link to='/add-user'>Add user</Link>
            <Link to='/users'>Users</Link>
        </div>
    );
};

export default Home;