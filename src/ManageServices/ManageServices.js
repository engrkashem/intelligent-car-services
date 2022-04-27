import React from 'react';
import { toast } from 'react-toastify';
import useServices from '../hooks/useServices';

const ManageServices = () => {
    const url = `https://secret-basin-73192.herokuapp.com/services`;
    const [services, setServices] = useServices(url);

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure, You Want to Delete?');
        if (proceed) {
            const url = `https://secret-basin-73192.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast('Service is deleted from server.');
                    const rest = services.filter(service => service._id !== id);
                    setServices(rest);
                })
        }
    };
    return (
        <div className='py-5'>
            <h1 className='text-center mb-4'>Manage Your Services</h1>
            <div className='services-container'>
                {
                    services.map(service =>
                        <div key={service._id} className='service-container'>
                            <img src={service.img} alt="" />
                            <div className='service-details'>
                                <h2> {service.name}</h2>
                                <p>Price: <span>{service.price}</span></p>
                                <p>Description: <small>{service.description}</small></p>
                                <button onClick={() => handleDelete(service._id)} >DELETE</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;