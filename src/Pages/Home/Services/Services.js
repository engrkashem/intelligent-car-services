import React from 'react';
import { Outlet } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services] = useServices();

    return (
        <div id='services'>
            <h1 className='services-title'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Services;