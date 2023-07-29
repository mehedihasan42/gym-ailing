import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navText = (
    <>
      <li><NavLink to='/' onClick={() => setIsDropdownOpen(false)}>Home</NavLink></li>
      <li><NavLink to='/instractors' onClick={() => setIsDropdownOpen(false)}>Instructors</NavLink></li>
      <li><NavLink to='/courses' onClick={() => setIsDropdownOpen(false)}>Courses</NavLink></li>
      <li><NavLink to='/profile' onClick={() => setIsDropdownOpen(false)}>Profile</NavLink></li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <button
          className="btn btn-ghost lg:hidden"
          onClick={toggleDropdown}
        >
          <HiMenu className='text-white text-3xl' />
        </button>
        {isDropdownOpen && (
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {navText}
            <li>
            {user ? (
          <>
            <label className='btn btn-ghost btn-circle avatar'>
              <div className="w-10  rounded-full lg:mr-2">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </label>
            <button onClick={handleLogOut} className="btn bg-[#DAFF0D]">Log Out</button>
          </>
        ) : (
          <Link to='/signup' className="btn bg-[#DAFF0D]">Sign Up</Link>
        )}
            </li>
          </ul>
        )}
        <a className="btn btn-ghost text-xl uppercase">GYM<span className='text-[#DAFF0D]'>ailing</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          {navText}
          
        </ul>
        
      </div>
      <div className="navbar-end hidden lg:flex">
        {user ? (
          <>
            <label className='btn btn-ghost btn-circle avatar'>
              <div className="w-10  rounded-full lg:mr-2">
                <img src={user?.photoURL} alt="User Avatar" />
              </div>
            </label>
            <button onClick={handleLogOut} className="btn bg-[#DAFF0D]">Log Out</button>
          </>
        ) : (
          <Link to='/signup' className="btn bg-[#DAFF0D]">Sign Up</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;