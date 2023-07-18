import React from 'react';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import CheckOut from '../../Components/CheckOut/CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useBookings from '../../hooks/useBookings';

const stripePromise = loadStripe('pk_test_51NFf3fF5khF6vLk2a5b6RC0K75pdvKSSSjwVOEbbppjLeDhpkjl4aOKCnlQKXfK4ujABqI0IjTQYupjQmGL0MYk700Xq9iwo2N');

const Payment = () => {
    const [courseData,refetch] = useBookings()
    const total = courseData.reduce((sum, item) => parseInt(item.coursePrice) + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-8/12'>
            <SectionTitle heading={'Payment'} subHeading={'Please pay for enroll'}></SectionTitle>

            <Elements stripe={stripePromise}>
            <CheckOut courses={courseData} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;