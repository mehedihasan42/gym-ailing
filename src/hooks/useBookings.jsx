import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
const useBookings = () => {
    const {user} = useAuth()
    const {data: courseData = [],refetch} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async()=>{
           const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`)
           return res.json()
        }
    })
    return [courseData,refetch]
};

export default useBookings;