import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
            const saveUser = {name:user.displayName,email:user.email,photo:user.photoURL}
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
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <>
            <div className="divider bg-base-300 h-0.5"></div>
            <div className='w-full text-center lg:my-4'>
                <button
                onClick={handleGoogleLogin}
                 className="btn btn-circle btn-neutral"><FcGoogle className='text-2xl' /></button>
            </div>
        </>
    );
};

export default SocialLogin;