import React from 'react';
import SectionTitle from '../../../Layouts/SectionTitle/SectionTitle';
import { AiOutlineRightCircle } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const OurOffer = () => {
    return (
        <div className='bg-black py-6'>
             
            <SectionTitle heading={'our offer'} subHeading={'MEMBERSHIP PLANS'}></SectionTitle>
            <div className='lg:flex py-12 justify-center lg:space-x-4'>
                {/* ------box-1----------- */}
                <div 
                 data-aos="zoom-in"
                 className="card w-80 mx-auto lg:mx-0 lg:w-96 border border-slate-200  bg-slate-900 text-primary-content">
                        <h2 className="bg-[#DAFF0D] rounded-t-lg text-center text-black p-6 text-2xl font-bold uppercase">Starter</h2>
                    <div className="card-body">
                        <p className='text-xl text-center'><span className='font-bold'>$7</span>/month</p>
                        <div className="divider bg-slate-400 h-0.5"></div>
                        <>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Single day Access</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>24/7 Gym Access</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Personal Trainer</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Nutrition Plan</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Diet Planning</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Weekly Events</p>
                        </>
                        <div className="divider bg-slate-400 h-0.5"></div>
                        <div className="card-actions justify-center">
                            <button className="btn border-0 text-white border-l-8 bg-slate-600 border-[#DAFF0D]">Buy Now</button>
                        </div>
                    </div>
                </div>
                  {/* -------box-2--------- */}
                  <div
                   data-aos="zoom-in-up"
                   className="card mt-4 lg:mt-0 w-80 mx-auto lg:mx-0 lg:w-96 border border-slate-200  bg-slate-900 text-primary-content">
                        <h2 className="bg-[#DAFF0D] rounded-t-lg text-center text-black p-6 text-2xl font-bold uppercase">Intermediate</h2>
                    <div className="card-body">
                        <p className='text-xl text-center'><span className='font-bold'>$10</span>/month</p>
                        <div className="divider bg-slate-400 h-0.5"></div>
                        <>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>1 Month Access</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>24/7 Gym Access</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Personal Trainer</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Nutrition Plan</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Diet Planning</p>
                            <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Daily Events</p>
                        </>
                        <div className="divider bg-slate-400 h-0.5"></div>
                        <div className="card-actions justify-center">
                        <button className="btn border-0 text-white border-l-8 bg-slate-600 border-[#DAFF0D]">Buy Now</button>
                        </div>
                    </div>
                </div>
                 {/* --------box-3-------------- */}
                 <div
                  data-aos="zoom-in-left"
                  className="card mt-4 lg:mt-0 w-80 mx-auto lg:mx-0 lg:w-96 border border-slate-200  bg-slate-900 text-primary-content">
                        <h2 className="bg-[#DAFF0D] rounded-t-lg text-center text-black p-6 text-2xl font-bold uppercase">advance</h2>
                    <div className="card-body">
                        <p className='text-xl text-center'><span className='font-bold'>$12</span>/month</p>
                        <div className="divider bg-slate-400 h-0.5"></div>
                       <>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>3 Month Access</p>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>24/7 Gym Access</p>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Personal Trainer</p>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Nutrition Plan</p>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Diet Planning</p>
                        <p className='flex'><AiOutlineRightCircle className='mt-2 text-[#DAFF0D] font-bold'/>Daily Events</p>
                       </>
                        <div className="divider bg-slate-400 h-0.5"></div>
                        <div className="card-actions justify-center">
                        <button className="btn border-0 text-white border-l-8 bg-slate-600 border-[#DAFF0D]">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;