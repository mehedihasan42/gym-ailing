import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useBookings from '../../hooks/useBookings';
import usePayments from '../../hooks/usePayments';

const CourseCarts = ({ data }) => {
    const { _id, image, courseName, duration, price, totalStudents } = data;
    const { user } = useAuth()
    const navigate = useNavigate()
    const [courseData,refetch] = useBookings();
    const [paymentData] = usePayments()
   
    const isAlreadyBooked = courseData.some(
        (booking) => booking.email === user?.email && booking.classId === _id
    );

    const isAlreadyEnroll = paymentData.some(
        (payment) => payment.email === user?.email && payment.courseId.includes(_id)
    );

    const handleAddToCard = () => {
        if (isAlreadyBooked) {
            Swal.fire({
                icon: 'info',
                title: 'You have already booked this course',
                showConfirmButton: false,
                timer: 2500
            });
        } else if (isAlreadyEnroll) {
            Swal.fire({
                icon: 'info',
                title: 'You have already enrolled in this course',
                showConfirmButton: false,
                timer: 2500
            });
        } else if (user && user.email) {
            // ... code for booking the course ...
            const bookings = {email:user.email, classId:_id, classImage:image, className:courseName, classDuration:duration, coursePrice:price, enrollStudents:totalStudents}
                    fetch('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/booking', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(bookings)
                    })
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course Booking Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
        } else {
            Swal.fire({
                title: 'Please login to book the course!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    };
    

    return (
        <div
            data-aos="fade-right"
            className="card w-80 lg:w-96 bg-[#DAFF0D] shadow-xl">
            <figure><img src={image} className='h-64 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCard(data)}
                        className="btn bg-black text-base-200">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCarts;