import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceID } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Service Details: {serviceID}</h2>
            <div className='text-center'>
                <button onClick={() => navigate('/checkout')} className='btn btn-primary'> Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;