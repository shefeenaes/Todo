"use client"
import React from 'react'
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form'
import { FormInputTask } from '@/types'
import BackButton from '@/components/BackButton'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
interface TaskDetailProps {
  params:{
    id:string;
  }
}



const TaskEdit: FC<TaskDetailProps> =  ({params}) => {
  const router= useRouter();
  const {id}=params
  const {data: dataTask, isLoading: isLoadingTasks} = useQuery({
    queryKey:['task',id],
    queryFn:async()=>{
      const response = await axios.get(`/api/tasks/${id}`)
      return response.data
    }
    
  })


    const handleEditTask: SubmitHandler<FormInputTask> =(data)=>{
      updateTask(data)
      }

      const { mutate:updateTask} = useMutation({
        mutationFn:(updateTask: FormInputTask)=>{
          return axios.patch(`/api/tasks/${id}`, updateTask)
        },
        onError: (error)=>{
          console.error(error)
        },
        onSuccess:()=>{
          router.push('/')
          router.refresh();
        }
    
      })
      if(isLoadingTasks){
        return(
          <div className='text-center'>
<span className='loading loading-spinner loading-lg'></span>
          </div>
        )
      }
  return (
<div>
    <BackButton/>
        <h1 className='text-2xl my-4 fond-bold text-center'> Edit Task</h1>
        <FormPost initialValue={dataTask} submit={handleEditTask} isEditing={true}/>
    </div>
  )
}

export default TaskEdit