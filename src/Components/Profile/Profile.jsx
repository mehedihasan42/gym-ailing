import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#DAFF0D] text-base-content">
                    {/* Sidebar content here */}
                    <a className="text-xl uppercase mb-6 underline">GYM<span className='text-current font-bold'>ailing</span></a>
                    <li><NavLink to='/profile/booking'>Booking Classes</NavLink></li>
                    <li><NavLink to='/profile/enroll'>Enroll Classes</NavLink></li>
                    <li><NavLink to='/profile/payment'>Payment History</NavLink></li>
                    <div className="divider bg-neutral h-0.5"></div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/instractors'>Instructors</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;