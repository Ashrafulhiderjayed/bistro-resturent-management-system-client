import React from 'react';

const AllUsers = () => {
    return (
        <section>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users?.length}</h2>
            </div>
        </section>
    );
};

export default AllUsers;