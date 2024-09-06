import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCart = () => {
    const {data: cart=[]}  = useQuery({

    })
    return (
        <div>
            
        </div>
    );
};

export default useCart;