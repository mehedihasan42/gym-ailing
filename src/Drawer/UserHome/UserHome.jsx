import React from 'react';
import useAuth from '../../hooks/useAuth';
import usePayments from '../../hooks/usePayments';

const UserHome = () => {
    const { user } = useAuth()
    const [paymentData] = usePayments()
    return (
        <div className='my-auto space-y-5'>
            <div className="avatar">
                <div className="w-36 rounded-xl">
                    <img src={user.photoURL} />
                </div>
            </div>
            <h2 className='text-white text-2xl font-bold'>Welcome Back, {user?.displayName}</h2>
            <h2 className='text-white text-xl'>Your Email: {user?.email}</h2>
        </div>
    );
};

export default UserHome;