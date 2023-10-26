"use client"
import React from 'react'
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form'
import { FormInputTask } from '@/types'
import BackButton from '@/components/BackButton'
import { FC } from 'react'
import { db } from '@/lib/db'
interface TaskDetailProps {
  params:{
    id:string;
  }
}
async function getTask(id: string)
{
  const response = await db.task.findFirst({
    where:{
      id:id
    },
    select:{
      id:true,
      task:true,
      status:true
    }
  });
  return response;
}
const TaskEdit: FC<TaskDetailProps> =  ({params}) => {
  const task =  getTask(params.id);
  

    const handleEditTask: SubmitHandler<FormInputTask> =(data)=>{
        console.log(data)
      }
  return (
<div>
    <BackButton/>
        <h1 className='text-2xl my-4 fond-bold text-center'> Edit Task</h1>
        <FormPost submit={handleEditTask} isEditing={true}/>
    </div>
  )
}

export default TaskEdit