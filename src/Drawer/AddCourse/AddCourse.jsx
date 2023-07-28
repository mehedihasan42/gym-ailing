import React from 'react';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import Swal from 'sweetalert2';

const image_token = import.meta.env.VITE_Imagebb_api_key;
const AddCourse = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())    
        .then(imgResponse=>{
            const imgURL = imgResponse.data.display_url;
            console.log(imgURL)
            const {courseName,duration,price,totalStudents} = data;
            const newData = {courseName,image:imgURL,duration,price:parseFloat(price),totalStudents};
            console.log(newData)

            axiosSecure.post('/courses',newData)
            .then(data=>{
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course id added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        })   
    };

    return (
        <div className='lg:mt-8 w-2/3 space-y-2'>
            <SectionTitle heading={'Add course'} subHeading={'add a new course here'}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-base-100 lg:p-8 lg:mt-8'>
                <div className="flex w-11/12 mx-auto space-x-2">
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text text-white">Course Name*</span>
                        </label>
                        <input
                            {...register("courseName", { required: true })}
                            type="text" placeholder="Course Name" className="input input-bordered input-md w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text text-white">Total Students*</span>
                        </label>
                        <input
                            {...register("totalStudents", { required: true })}
                            type="text" placeholder="Total Students" className="input input-bordered input-md w-full" />
                    </div>
                </div>
                <div className="flex w-11/12 mx-auto space-x-2">
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text text-white">Course Fee*</span>
                        </label>
                        <input
                            {...register("price", { required: true })}
                            type="text" placeholder="Course Fee" className="input input-bordered input-md w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text text-white">Course Duration*</span>
                        </label>
                        <input
                            {...register("duration", { required: true })}
                            type="text" placeholder="Course Duration" className="input input-bordered input-md w-full" />
                    </div>
                </div>
                <div className="form-control w-11/12 mx-auto">
                    <label className="label">
                        <span className="label-text text-white">Description*</span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                </div>
                <div>
                    <label className="label lg:ml-8">
                        <span className="label-text text-white">Course Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered file-input-sm w-full max-w-xs lg:ml-8" />
                </div>
                <div className='w-11/12 mx-auto mt-2'>
                    <input type="submit" value={'Add Course'} className='bg-[#DAFF0D] p-4 font-bold w-full rounded cursor-pointer' />
                </div>
            </form>
        </div>
    );
};

export default AddCourse;