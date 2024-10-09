
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user } = useAuth();
    return (
        <div>
            <h2>
                <span>Welcome User!</span>
                {
                    user &&
                    <span> {user.displayName}</span>
                }
            </h2>
        </div>
    );
};

export default UserHome;