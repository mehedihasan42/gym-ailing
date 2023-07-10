import React from 'react';
import SectionTitle from '../../../Layouts/SectionTitle/SectionTitle';
// import CSS from './Contact.css'

const Contact = () => {
    return (
        <div className='bg-black py-8 pt-8'>
            <SectionTitle heading={'Contact us'} subHeading={"let's started"}></SectionTitle>
            <div className='lg:flex lg:w-9/12 mx-auto py-12 lg:space-x-6'>

           
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.993324959721!2d90.40613732477401!3d23.85437077859964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c68179dad349%3A0x83a94641ad9fab9c!2sCivilaviation%20Colony%201230!5e0!3m2!1sen!2sbd!4v1688707273255!5m2!1sen!2sbd"
                  
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    data-aos="fade-right"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='lg:ml-6 mx-auto h-72 lg:w-6/12 my-auto'
                ></iframe>
            
            

                <form data-aos="fade-left" className="card-body lg:w-1/3 my-auto ">
                    {/* <div > */}
                        <input type="text" placeholder="Your Name" className="input text-white w-full bg-slate-800" />
                        <input type="text" placeholder="Email Adress" className="input text-white w-full bg-slate-800" />
                        <input type="text" placeholder="Phone Number" className="input text-white w-full bg-slate-800" />
                        <textarea className="textarea bg-gray-800 text-white" placeholder="Your Message..."></textarea>
                        <input type="submit" className='bg-[#DAFF0D] rounded h-12 font-bold cursor-pointer' />
                    {/* </div> */}
                </form>

            </div>
        </div>
    );
};

export default Contact;