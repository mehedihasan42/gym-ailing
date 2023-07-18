import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiousSecure';
import { BsBookmarksFill } from "react-icons/bs";
import { MdBorderColor } from "react-icons/md";

const AdminHome = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: stats={}} = useQuery({
        queryKey:['admin-state'],
        queryFn:async()=>{
            const res = await axiosSecure('/admin-state')
            return res.data;
        }
    })
    return (
        <div>
            <p className='text-white text-2xl font-bold lg:my-6'>Welcome Back, {user?.displayName}</p>
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users}</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Courses</div>
    <div className="stat-value">{stats.courses}</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <BsBookmarksFill className='text-2xl'/>
    </div>
    <div className="stat-title">Bookings</div>
    <div className="stat-value">{stats.bookings}</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <MdBorderColor className='text-2xl'/>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminHome;