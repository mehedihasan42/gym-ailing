import React from 'react';
import useCourses from '../../hooks/useCourses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiousSecure';

const ManageCourse = () => {
    const [courseData, refetch] = useCourses()
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = courses =>{
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
          axiosSecure.delete(`/courses/${courses._id}`)
          .then(()=>{
            refetch()
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          })        
        }
      })
    }

    return (
        <div className="overflow-x-auto text-white w-10/12">
  <table className="table">
    {/* head */}
    <thead className='text-white'>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Duration</th>
        <th>Course Fee</th>
        <th>Total Sit</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {courseData.map((courses,index)=>
       <tr key={courses._id}>
        <td>{index+1}</td>
       <td>
         <div className="flex items-center space-x-3">
           <div className="avatar">
             <div className="mask mask-squircle w-12 h-12">
               <img src={courses.image} alt="Avatar Tailwind CSS Component" />
             </div>
           </div>
         </div>
       </td>
       <td>
       {courses.courseName}
       </td>
       <td>
       {courses.duration}
       </td>
       <td>
        ${courses.price}
       </td>
       <td>
        {courses.totalStudents}
       </td>
       {/* <td><button
        className="btn bg-[#DAFF0D]">Update</button></td> */}
       <td><button
        onClick={()=>handleDelete(courses)}
        className="btn bg-[#DAFF0D]">Delete</button></td>
     </tr>
        )}
     
    </tbody>
  </table>
</div>
    );
};

export default ManageCourse;