import React from 'react';
import useCourses from '../../hooks/useCourses';
import CourseCarts from './CourseCarts';

const Courses = () => {
    const [courseData] = useCourses()

    return (
        <div className='bg-black'>
            <div className='grid lg:grid-cols-3 w-5/6 mx-auto gap-10 py-8'>
                {
                    courseData.map(data =>
                        <CourseCarts key={data._id} data={data}></CourseCarts>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;