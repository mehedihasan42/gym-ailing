import React from 'react';
import useInstructors from '../../hooks/useInstructors';

const Instructors = () => {

    const [instructorInfo] = useInstructors()

    return (
      <div className='bg-[#DAFF0D] py-4'>
          <div className='grid lg:grid-cols-3 lg:my-8 w-5/6 mx-auto gap-10'>
            {
                instructorInfo.map(instructor =>
                    <div
                    data-aos="fade-up" 
                     key={instructor._id} className="card w-80 lg:w-96 shadow-xl bg-black text-base-300">
                        <figure><img src={instructor.image} className='h-64 w-full' alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>My Course: {instructor.courseName}</p>
                            <p>Course Duration: {instructor.duration}</p>
                            <p>Experence: {instructor.experience}</p>
                            {/* <div className="card-actions justify-end">
                                <button className="btn bg-[#DAFF0D]">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                )
            }
        </div>
      </div>
    );
};

export default Instructors;