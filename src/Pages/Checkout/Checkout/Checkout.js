import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {

    const [user] = useAuthState(auth);

    const { serviceID } = useParams();
    const url = `http://localhost:5000/services/${serviceID}`;
    const [service] = useServices(url);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceID,
            address: data.address,
            phone: data.phone
        };
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Your Order is placed Successfully. Our delivery man will contact you soon.')
                }
            })
            .catch(error => console.error(error))

        /* fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order),
        }); */
    }


    /* const [user, setUser] = useState({
        name: 'Akbar the Great',
        address: 'Noojahan Road, Md.pur',
        email: 'akbar@noorjahan.com',
        phone: '01711111111',
    })
    const handleAddressChange = e => {
        const { address, ...rest } = user;
        const newAddress = e.target.value;
        const newuser = { address: newAddress, ...rest };
        setUser(newuser);
    }
 */

    return (
        <div className='w-75 mx-auto mt-5'>
            <h2 className='text-center'>Please Confirm Your Service</h2>
            <form className='w-75 mx-auto d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' value={user.displayName} {...register("name")} readOnly disabled />
                <input placeholder='Email' value={user.email} {...register("email")} readOnly disabled />
                <input value={service.name} placeholder='Service' {...register("service", { required: true })} readOnly />
                <textarea placeholder='Address' {...register("address", { required: true })} autoComplete='off' />
                <input placeholder='Phone'  {...register("phone", { required: true })} />
                <input className='btn btn-dark' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Checkout;