import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:5000/services/${serviceID}`;
    // const stateDependency = {};
    const [service] = useServices(url);

    return (
        <div>
            <h2>You Are About to Book: {service.name}</h2>
            <div className='text-center'>
                <button onClick={() => navigate(`/checkout/${serviceID}`)} className='btn btn-primary'> Proceed Checkout</button>
            </div>
        </div>
    );
};

export default ServiceDetail;