import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return (
            <div className='text-center mt-5'>
                <h3 className='text-danger'>Your Email is not
                    Verified</h3>
                <h5 className='text-success'>Please Verify Your Email Address</h5>
                <button onClick={async () => {
                    await sendEmailVerification();
                    toast('Email is sent.')
                }} className='btn btn-link text-decoration-none fw-bold'>Send Verification Email</button>
                <ToastContainer></ToastContainer>
            </div>
        );
    }

    return children;
};

export default RequireAuth;