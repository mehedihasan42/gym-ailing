import React from 'react';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth()

    const navText = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instractors'>Instructors</Link></li>
        <li><Link to='/courses'>Courses</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu className='text-white text-3xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navText}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">GYM<span className='text-[#DAFF0D]'>ailing</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navText}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <label className='btn btn-ghost btn-circle avatar'>
                            <div className="w-10  rounded-full lg:mr-2">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <Link onClick={handleLogOut} className="btn bg-[#DAFF0D]">Log Out</Link>
                    </> :
                        <Link to='/signup' className="btn bg-[#DAFF0D]">Sign Up</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;