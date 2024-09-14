import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='p-8'>
            <div className='divider'></div>
            <div className='text-center'>
                <button className="btn btn-neutral">
                    <FaGoogle className='mr-4'></FaGoogle>
                    Button
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;