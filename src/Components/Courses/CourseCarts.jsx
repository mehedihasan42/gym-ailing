import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const CourseCarts = ({ data }) => {
    const { _id, image, courseName, duration, price, totalStudents } = data;
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleAddToCard = item => {
        console.log(item)
        if (user && user.email) {
            const bookings = {email:user.email, classId:_id, classImage:image, className:courseName, classDuration:duration, coursePrice:price, enrollStudents:totalStudents}
            fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookings)

            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                title: 'Please login for book course!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
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