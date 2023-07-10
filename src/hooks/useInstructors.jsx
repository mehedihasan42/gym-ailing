// import React from 'react';
import { useQuery } from '@tanstack/react-query'
// import { useEffect, useState } from 'react';



const useInstructors = () => {

  // const [infos,setInfos] = useState()
  // useEffect(()=>{
  //   fetch('http://localhost:5000/instructors')
  //   .then(res=>res.json())
  //   .then(data=>setInfos(data))
  // },[])

    const { data:instructorInfo=[] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
           const res = await fetch('http://localhost:5000/instructors')
           return res.json()
        }
    })
    
    return [instructorInfo]
};

export default useInstructors;