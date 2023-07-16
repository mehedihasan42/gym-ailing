import { useQuery } from "@tanstack/react-query";


const useCourses = () => {

    const { data:courseData=[], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/courses')
            return res.json()
        }
    })

    return [courseData,refetch]
};

export default useCourses;