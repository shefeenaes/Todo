import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeftCircle } from 'lucide-react';
const BackButton = () => {
const router=useRouter();
  return (
    <button   className="btn btn-circle hover:border-white border-white  hover:bg-purple-200 bg-white" onClick={()=>{router.back()}}>
    <ArrowLeftCircle size={48} color="#6e28f0" strokeWidth={1.5} />
    </button>
  )
}

export default BackButton