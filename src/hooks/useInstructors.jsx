// import React from 'react';
import { useQuery } from '@tanstack/react-query'
// import { useEffect, useState } from 'react';



const useInstructors = () => {

  // const [infos,setInfos] = useState()
  // useEffect(()=>{
  //   fetch('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/instructors')
  //   .then(res=>res.json())
  //   .then(data=>setInfos(data))
  // },[])

    const { data:instructorInfo=[] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
           const res = await fetch('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/instructors')
           return res.json()
        }
    })
    
    return [instructorInfo]
};

export default useInstructors;