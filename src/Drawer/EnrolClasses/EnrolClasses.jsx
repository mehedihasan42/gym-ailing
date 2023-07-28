import React from 'react';
import usePayments from '../../hooks/usePayments';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';

const EnrolClasses = () => {
    const [paymentData] = usePayments()
    return (
        <div className='py-20'>
            <SectionTitle heading={'Enroll Classes'} subHeading={'my all enroll class'}></SectionTitle>
            {
               paymentData.map(data=><div className='my-6 text-xl font-bold' key={data._id}>
                {
                    data.itmesName.map((item)=><div className='text-white flex justify-center'>
                       <p className='border border-base-300 my-2 p-2'>{item}</p>
                        </div>)
                }
               </div>)
            }
        </div>
    );
};

export default EnrolClasses;