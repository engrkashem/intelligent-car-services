import React from 'react';

const Service = ({ service: { name } }) => {
    // const { name } = Service;
    return (
        <div>
            <h2>Our Service: {name}</h2>
        </div>
    );
};

export default Service;