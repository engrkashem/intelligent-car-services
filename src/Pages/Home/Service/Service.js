import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service: { id, name, img, price, description } }) => {

    const navigate = useNavigate()

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <div className='service-details'>
                <h2> {name}</h2>
                <p>Price: <span>{price}</span></p>
                <p>Description: <small>{description}</small></p>
                <button onClick={() => navigate(`/service/${id}`)}>BOOK: {name}</button>
            </div>
        </div>
    );
};

export default Service;