import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  
  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className='bg-black py-20'>
      <div className='lg:max-h-screen max-w-screen-lg lg:mx-auto p-8 lg:p-20 bg-[#DAFF0D] italic rounded'>
        <div className='lg:flex'>
          <div className='text-2xl lg:text-3xl mb-6 lg:mb-0 font-bold lg:mr-8 text-black'>
            GET IN SHAPE AND TRAINING AT THE GYM OR HOME FOR YOUR FITNESS
          </div>
          <div className='space-y-6'>
            <p>
              Aqestic laudantium optio amet a ququam saepe aliquid, voluate dicta fuga dolor error sed earum a magni
              aliquid bladiis dolores, veritatis soluta autem beatae officia expedita rerum dolobus sit provent delectus.
            </p>
            <p>
              Nam risus dolor, ut ornare mauris non. Praent non voluptate dicta fuga dolor error sed earum a aliqdpp quis tempor arcuam aliquet
              metus non neque vitae.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className='lg:flex lg:space-x-2 space-y-4 lg:space-y-0 mt-6 lg:mt-10'>
          <div className="card w-80 lg:w-96 bg-slate-900 text-white hover:shadow-2xl">
            <figure><img src="https://plus.unsplash.com/premium_photo-1664109999449-82f58d6f7cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title uppercase">Group Fitness</h2>
              <p>Aliquam sit amet mollis expo sail and bounty exten.</p>
            </div>
          </div>

          <div className="card w-80 lg:w-96 bg-slate-900 text-white hover:shadow-2xl">
            <figure><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">TRAINING COACHES</h2>
              <p>Aliquam sit amet mollis expo sail and bounty exten.</p>
            </div>
          </div>

          <div className="card w-80 lg:w-96 bg-slate-900 text-white hover:shadow-2xl">
            <figure><img src="https://media.istockphoto.com/id/1266585023/photo/go-to-gym-stay-healthy-people-going-to-gym.jpg?s=2048x2048&w=is&k=20&c=lLBHjQDueh7ez4T6b-AMxlf9hSDBoU3qCfHK-nkWgT0=" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">DIET PLANNING</h2>
              <p>Mliquam sit amet mollis expo sail and bounty exten.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;