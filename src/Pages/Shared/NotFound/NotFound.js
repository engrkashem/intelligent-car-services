import React from 'react';
import './NotFound.css'
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404, Mechanic is sleeping</h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;