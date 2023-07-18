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
                    data.itmesName.map((item,index)=><div className='text-white flex justify-center'>
                        <p>{index+1}.</p>
                       <p>{item}</p>
                        </div>)
                }
               </div>)
            }
        </div>
    );
};

export default EnrolClasses;