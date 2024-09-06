import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    //Tan stack query
    const axiosSecure = useAxiosSecure();

    const {data: cart=[]}  = useQuery({
        queryKey: ['cart'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/cart');
            return res.data;
        }
    })
    
    return [cart]
};

export default useCart;