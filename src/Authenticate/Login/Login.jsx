import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {

  const {userLogin} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register,handleSubmit,formState: { errors },} = useForm()
  const onSubmit = (data) =>{
    userLogin(data.email,data.password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true });
    })
}
    return (
        <div className="hero min-h-screen bg-[#DAFF0D]">
            <Helmet>
                  <title>Log In</title>
            </Helmet>
        <form data-aos="zoom-in" onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
            <h2 className='text-2xl font-bold text-center mb-6'>LogIn Please</h2>
          <div className="card w-full max-w-sm shadow-2xl mx-auto bg-black">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" {...register("email")}/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" {...register("password")}/>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#DAFF0D]">Log In</button>
              </div>
              <p className='text-white'>New User! Please <Link to='/signup' className='text-blue-600 font-bold'>Sign Up</Link></p>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Login;