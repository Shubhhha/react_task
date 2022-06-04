import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
function Notfound(props) {
    return (
        <div className='App'>
            <h1>Page Not Found</h1>
            <Link to="/" >Go to Login Page</Link>
        </div>
    );
}

export default Notfound;