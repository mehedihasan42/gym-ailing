import React from 'react';
import useBookings from '../../hooks/useBookings';
import { BsFillTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2';

const BookingClasses = () => {
  const [courseData,refetch] = useBookings()
  const total = courseData.reduce((sum, item) => parseInt(item.coursePrice) + sum, 0)

  const handleDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${item?._id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount === 1) {
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }

  return (
    <>
      <h2 className="text-center font-bold mt-8 text-2xl">Total Bookings: {courseData.length}</h2>
      <h2 className="text-center font-bold mt-8 text-2xl">Total Price: {total}</h2>
      <div className='grid lg:grid-cols-2'>
        {
          courseData.map(data =>
            <div key={data._id} className="card card-compact w-96 bg-black text-white shadow-xl lg:mx-12 my-8">
              <figure><img src={data.classImage} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{data.className}</h2>
                <p>${data.coursePrice}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(data)}
                    className="btn bg-[#DAFF0D]"><BsFillTrashFill className='text-xl' /></button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default BookingClasses;