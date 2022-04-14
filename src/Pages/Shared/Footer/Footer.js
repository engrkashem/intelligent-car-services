import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 fw-bold'>
            <p>
                <small>copyright &copy; {new Date().getFullYear()}</small>
            </p>
        </footer>
    );
};

export default Footer;