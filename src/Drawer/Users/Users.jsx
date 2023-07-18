import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2';
import useUserUpdate from '../../hooks/useUserUpdate';
import useAxiosSecure from '../../hooks/useAxiousSecure';

const Users = () => {
    const [users,refetch] = useUserUpdate()
    const [axiosSecure] = useAxiosSecure()
    const handleUpdate = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

   const handleDelete = user =>{
    axiosSecure.delete(`http://localhost:5000/users/${user._id}`)
     .then(data=>{
      if(data.data.deletedCount){
        refetch()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500
          })
    }
     })
   }

    return (
        <div className='w-2/3 text-white'>
           
       <h2 className='text-2xl text-center mb-4'>Total Users: {users.length}</h2>
                    <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Update User</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
      users.map(user=>
        <tr key={user._id}>
        <td>
          <div className="flex items-center space-x-3">
          <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.email}</div>
            </div>
          </div>
        </td>
        <td>{user.role === 'admin'?'Admin':
        <button onClick={()=>handleUpdate(user)} className="btn btn-active">User</button>
        }</td>
        <th>
          <button
          onClick={()=>handleDelete(user)}
           className="btn btn-ghost btn-xs text-[#DAFF0D] p-4"><BsFillTrashFill className='text-3xl'/></button>
        </th>
      </tr>
        )
      }
    </tbody>
  </table>
</div>
                    
            
        </div>
    );
};

export default Users;