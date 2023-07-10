import React from 'react';
import useCourses from '../../hooks/useCourses';

const Courses = () => {
    const [courseData] = useCourses()
    return (
        <div className='bg-black'>
            <div className='grid lg:grid-cols-3 w-5/6 mx-auto gap-10 py-8'>
                {
                    courseData.map(data =>
                        <div
                        data-aos="fade-right"
                         key={data._id} className="card w-96 bg-[#DAFF0D] shadow-xl">
                            <figure><img src={data.image} className='h-64 w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.courseName}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-black text-base-200">Book Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;