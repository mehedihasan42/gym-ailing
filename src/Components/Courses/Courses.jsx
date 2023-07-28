import React, { useState } from 'react';
import useCourses from '../../hooks/useCourses';
import CourseCarts from './CourseCarts';

const Courses = () => {
    const [courseData] = useCourses();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter the courseData based on the searchQuery
    const filteredCourses = courseData.filter((data) =>
        data.courseName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-black'>
            <div className='mb-4'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder='Search by name...'
                        className='px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300'
                    />
                </div>
            <div className='grid lg:grid-cols-3 w-5/6 mx-auto gap-10 py-8'>
                
                {filteredCourses.map((data) => (
                    <CourseCarts key={data._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Courses;