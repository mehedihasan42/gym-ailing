import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';


const axiosSecure = axios.create({
    baseURL: 'https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app', 
});

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()


    useEffect(() => {
        axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response) {
                    const { status } = error.response;
                    if (status === 401 || status === 403) {
                        // await logOut();
                        // navigate('/login');
                    }
                }
                return Promise.reject(error);
            }
        );
    }, [logOut, navigate]);

    return [axiosSecure]; 
};

export default useAxiosSecure;
