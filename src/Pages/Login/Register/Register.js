import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }

    //just for fun. its absolutely optional
    if (user) {
        console.log('user', user)
    }


    const handleRegister = async e => {
        e.preventDefault();
        //it will work only for form tags.
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
        }
        else { alert('Your two password did not match') }


        await updateProfile({ displayName: name });
        console.log('updated profile')
        navigate('/home');
    }


    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary fw-bold fs-1 mb-4 text-center'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' type="password" placeholder="Re-Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={`ps-2 ${agree ? '' : 'text-danger'}`} onClick={() => setAgree(!agree)} type="checkbox" label="Accept Intelligent Car Services Terms and Conditions" />
                </Form.Group>
                {/* <Button className={agree ? 'active' : 'disabled'} variant="primary" type="submit">
                    Submit
                </Button> */}
                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-3'>Already have an Account?<Link to={'/login'} className='text-primary text-decoration-none fw-bold ms-2'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;