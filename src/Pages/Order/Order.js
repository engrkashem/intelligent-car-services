// import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        const url = `https://secret-basin-73192.herokuapp.com/order?email=${email}`;
        const getOrders = async () => {
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
                /* const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                setOrders(data); */
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}><p>
                    {order.email}:{order.service}</p></div>)
            }
        </div>
    );
};

export default Order;