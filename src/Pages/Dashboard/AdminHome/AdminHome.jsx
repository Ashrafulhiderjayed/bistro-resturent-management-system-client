import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const {user } = useAuth();
    return (
        <div>
            <h2>
                <span>Welcome Amin!</span>
                {
                    user &&
                    <span> {user.displayName}</span>
                }
            </h2>
        </div>
    );
};

export default AdminHome;