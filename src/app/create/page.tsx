"use client"
import React, { useMemo } from 'react'
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form'
import { FormInputTask } from '@/types'
import BackButton from '@/components/BackButton'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Create = () => {
  const router = useRouter();
  const handleCreateTask: SubmitHandler<FormInputTask> =(data)=>{
    createTask(data)
  }
  const { mutate:createTask } = useMutation({

    mutationFn:(newTask: FormInputTask)=>{
      return axios.post('/api/tasks', newTask)
    },
    onError: (error)=>{
      console.error(error)
    },
    onSuccess:()=>{
      router.push('/')
      router.refresh();
    }

  })
  return (
    <div>
      <BackButton/>
        <h1 className='text-2xl my-4 fond-bold text-center'> Add new Task</h1>
        <FormPost submit={handleCreateTask} isEditing={false}/>
    </div>
  )
}

export default Create