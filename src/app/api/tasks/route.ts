import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET()
{
    try
    {
        const tasks = await db.task.findMany()
        return NextResponse.json(tasks,{status:200})

    }
    catch(error)
    {
        return NextResponse.json({message:'server failed to fetch tasks' },{status:500})
    }
}
export async function POST(req:Request)
{
    try
    {
  
        const body = await req.json()
        const tasks = await db.task.create({data:{
            task:body.task,
            status:body.status
        }})
        return NextResponse.json(tasks,{status:200})

    }
    catch(error)
    {
        return NextResponse.json({message:'server failed to create task' },{status:500})
    }
}

