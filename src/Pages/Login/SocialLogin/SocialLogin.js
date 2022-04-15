import React from 'react';
import googleIcon from '../../../images/social/icons-google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);

    const navigate = useNavigate();

    let errorMessage;
    if (error || errorGit) {
        errorMessage = <div>
            <p className='text-danger'>Error: {error?.message}{errorGit?.message}</p>
        </div>
    }

    if (user || userGit) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 shadow'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 shadow'></div>
            </div>
            {errorMessage}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-75 d-block mx-auto mb-2'><img width={'30px'} src={googleIcon} alt="" /> <span className='px-2'>Google Log in</span></button>
                <button className='btn btn-secondary w-75 d-block mx-auto mb-2'><img width={'30px'} src={facebook} alt="" /> <span className='px-2'>Facebook Log in</span></button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-75 d-block mx-auto'><img width={'30px'} src={github} alt="" /> <span className='px-2'>Github Log in</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;