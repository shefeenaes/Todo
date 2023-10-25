"use client"
import React from 'react'
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form'
import { FormInputTask } from '@/types'
import BackButton from '@/components/BackButton'
const Create = () => {
  const handleCreateTask: SubmitHandler<FormInputTask> =(data)=>{
    console.log(data)
  }
  return (
    <div>
      <BackButton/>
        <h1 className='text-2xl my-4 fond-bold text-center'> Add new Task</h1>
        <FormPost submit={handleCreateTask} isEditing={false}/>
    </div>
  )
}

export default Create