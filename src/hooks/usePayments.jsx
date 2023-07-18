import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiousSecure';
import useAuth from './useAuth';

const usePayments = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:paymentData=[]} = useQuery({
        queryKey:['payment',user?.email],
        queryFn:async()=>{
           const res = await axiosSecure(`/payment?email=${user?.email}`)
           return res.data;
        }
    })
    return [paymentData]
};

export default usePayments;