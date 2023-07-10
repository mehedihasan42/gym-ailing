import React from 'react';
import SectionTitle from '../../../Layouts/SectionTitle/SectionTitle';

const Events = () => {
    return (
        <div className='bg-black py-16'>
            <SectionTitle heading={'JOIN OUR EVENT'} subHeading={'UPCOMING EVENTS'}></SectionTitle>
           <div className='mt-8 pt-8'>
           <div 
           data-aos="fade-up"
            className="card w-10/12 lg:w-2/3 mx-auto bg-black lg:card-side border border-white shadow-xl">
                <div className='bg-[#DAFF0D] ml-2 my-4 p-8'>
                    <p className='text-5xl font-bold'>20</p>
                    <p className='text-xl'>March</p>
                </div>
                <div className="card-body text-base-200">
                    <h2 className="card-title">ULTIMATE FITNESS CHALLENGE</h2>
                    <p className='text-gray-400'>1250 23rd Street NW, Washington, DC 20037</p>
                    <div className="card-actions justify-end">
                        <button className="btn border-0 border-l-8 bg-slate-800 text-base-200 border-[#DAFF0D]">Join Now</button>
                    </div>
                </div>
            </div>

           <div
            data-aos="fade-up"
            className="card w-10/12 lg:w-2/3 mx-auto bg-black lg:card-side border mt-4 border-white shadow-xl">
                <div className='bg-[#DAFF0D] ml-2 my-4 p-8'>
                    <p className='text-5xl font-bold'>20</p>
                    <p className='text-xl'>March</p>
                </div>
                <div className="card-body text-base-200">
                    <h2 className="card-title">THE FITNESS WEEK BOOT CAMP</h2>
                    <p className='text-gray-400'>1250 23rd Street NW, Washington, DC 20037</p>
                    <div className="card-actions justify-end">
                        <button className="btn border-0 border-l-8 bg-slate-800 text-base-200 border-[#DAFF0D]">Join Now</button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Events;