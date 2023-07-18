import React from 'react';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import usePayments from '../../hooks/usePayments';

const Histry = () => {
    const [paymentData] = usePayments()
    return (
        <div className='py-20'>
            <SectionTitle heading={'History'} subHeading={'Your payment history'}></SectionTitle>
            {
               paymentData.map(data=><div className='my-6 text-xl font-bold' key={data._id}>
                {
                    // console.log(data.price)
                    <>
                    <p className='text-xl text-white'>Amount: ${data.price}</p>
                    <p className='text-sm text-white'>Transetion Id: {data.transetionId}</p>
                    </>
                    // data.itmesName.map((item,index)=><div className='text-white flex justify-center'>
                    //     <p>{index+1}.</p>
                    //    <p>{item}</p>
                    //     </div>)
                }
               </div>)
            }
        </div>
    );
};

export default Histry;