import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import required modules
//-------add (Autoplay)
import { Navigation, Autoplay } from 'swiper/modules';
import Aos from 'aos';

Aos.init();

const Banner = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
        });
      }, []);

    const text = <>
        <h1 data-aos="fade-down-right" className="mb-5 text-3xl lg:text-5xl font-bold text-white">GYM<span className='text-[#DAFF0D] uppercase'>ailing</span></h1>
        <p data-aos="fade-up-right" className="mb-5 lg:w-2/4 font-bold">Welcome to GYN AILING, your ultimate destination for fitness and well-being. We are a state-of-the-art gym facility dedicated to helping individuals
            achieve their health and fitness goals in a motivating and supportive environment.</p>
        {/* <button className="btn btn-primary">Get Started</button> */}
    </>
    return (
        <>
            <Swiper
                rewind={true}
                navigation={false}
                modules={[Navigation,Autoplay]}   //add-()
                className="mySwiper"
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
            >
                {/* ------slide 1-------------- */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                            className="w-full h-full object-cover absolute mix-blend-overlay" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div className=''>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* ------------slide 2-------- */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-black to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -----------slide 3 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------------slide 4 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -----------slide 5 */}
                <SwiperSlide>
                    <div className="hero min-h-screen relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* -------------slide 6 */}
                <SwiperSlide>
                    <div className="hero min-h-screen  relative bg-gradient-to-l from-gray-500 to-black">
                        <img
                            className="w-full h-full object-cover absolute mix-blend-overlay"
                            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content">
                            <div>
                                {text}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;