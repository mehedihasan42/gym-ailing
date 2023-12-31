import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Pages/AuthProvider/AuthProvider';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  const onSubmit = data => {
    console.log(data)
    createNewUser(data.email, data.newpass)
      .then(result => {
        const user = result.user;
        console.log(user)
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = {name:data.name,email:data.email,photo:data.photo}
            fetch('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/users',{
              method:'POST',
              headers: {
                'content-type': 'application/json'
              },
              body:JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  console.log('user profile updated')
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from, { replace: true });
                }
              })
          })
      })
      .catch(error => {
        console.log(error)
      })
  }



  return (
    <div className="hero min-h-screen bg-[#DAFF0D]">
      <div data-aos="zoom-in"  className="lg:w-2/3 mx-auto">
        <h2 className='text-2xl font-bold text-center mb-6'>SignUp Please</h2>
        <div className="card w-full max-w-sm shadow-2xl mx-auto bg-black lg:my-6">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" {...register("name")} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" {...register("email")} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input type="photo" placeholder="Photo URL" className="input input-bordered" {...register("photo")} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">New Password</span>
              </label>
              <input type="text" placeholder="new password" className="input input-bordered" {...register("newpass")} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input type="text" placeholder="confirm password" className="input input-bordered" {...register("confirmpass")} />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#DAFF0D]">Sign Up</button>
            </div>
            <p className='text-white'>Already have an account <Link to='/login' className='text-blue-600 font-bold'>Log In</Link></p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;