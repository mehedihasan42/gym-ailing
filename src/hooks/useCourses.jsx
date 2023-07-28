import { useQuery } from "@tanstack/react-query";


const useCourses = () => {

    const { data:courseData=[], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async()=>{
            const res = await fetch('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/courses')
            return res.json()
        }
    })

    return [courseData,refetch]
};

export default useCourses;