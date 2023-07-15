import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiousSecure';

const useBookings = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: courseData = [],refetch} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async()=>{
           const res = await axiosSecure(`/booking?email=${user?.email}`)
           return res.data;
        }
    })
    return [courseData,refetch]
};

export default useBookings;