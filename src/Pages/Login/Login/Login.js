import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error) {
        errorMessage = <p>{error?.errorMessage}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = e => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email is sent');
        }
        else {
            toast('Please Enter Your Email Address');
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary fw-bold fs-1 mb-4 text-center'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-4'>New to Intelligent Car Services?<Link to={'/register'} className='text-primary text-decoration-none fw-bold ms-2'>Please Register</Link></p>
            <p className='mt-4'>Forgot Password?<button
                onClick={resetPassword}
                className='btn btn-link text-decoration-none fw-bold ms-2'>Reset Password</button></p>
            {errorMessage}
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;