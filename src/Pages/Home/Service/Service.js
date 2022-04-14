import React from 'react';
import './Service.css'

const Service = ({ service: { name, img, price, description } }) => {
    // const { name } = Service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: <span>{price}</span></p>
            <p>Description: <small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;