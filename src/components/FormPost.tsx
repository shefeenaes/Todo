"use client"
import { FormInputTask } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FC } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
import axios from 'axios'
interface FormInput
{
  submit:SubmitHandler<FormInputTask>;
  isEditing: boolean;
  initialValue?:FormInputTask;
}
const FormPost: FC<FormInput> = ({submit, isEditing, initialValue}) => {
    const {register,handleSubmit} = useForm<FormInputTask>({
      defaultValues:initialValue
    });

    //fetch list of tasks
    const {data: dataTasks, isLoading: isLoadingTasks}= useQuery({
      queryKey: ['tasks'],
      queryFn: async() => {
        const response = await axios.get('/api/tasks')
      }
    })

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
        <textarea className="textarea textarea-primary textarea-lg w-full max-w-lg" {...register("task", { required: true })} placeholder="Type your new task..."></textarea>
        <select className="select select-primary  select-lg w-full max-w-lg "  {...register("status",{ required: true })}  defaultValue=''>
            <option disabled value=''>Select status</option>
            <option>Not started</option>
            <option>Done</option>
            <option>In progress</option>
        </select>
        <button type="submit" className='btn btn-primary w-full max-w-lg'>{isEditing ?'Update':'Create'}</button>
    </form>
  )
}

export default FormPost