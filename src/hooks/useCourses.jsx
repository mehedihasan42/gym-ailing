import { useQuery } from "@tanstack/react-query";


const useCourses = () => {

    const { data:courseData=[] } = useQuery({
        queryKey: ['courses'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/courses')
            return res.json()
        }
    })

    return [courseData]
};

export default useCourses;