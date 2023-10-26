import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps
{
    params:{
        taskId: string
    }
}

export async function DELETE(req: Request,context:contextProps)
{
    try
    {
        const {params}=context
        await db.task.delete({
            where:
            {
                id:params.taskId
            } });
        return new Response(null,{status: 204})

    }
    catch(error)
    {
        return NextResponse.json({message:'server failed to delete task' },{status:500})
    }
}
export async function PATCH(req: Request,context:contextProps)
{
    try
    {
        const {params}=context
        const body =await req.json();
        await db.task.update({
            where:
            {
                id:params.taskId
            } ,
            data:{
                task:body.task,
                status:body.status
            }});
        return NextResponse.json({message:'updated successfully' },{status:200})

    }
    catch(error)
    {
        return NextResponse.json({message:'server failed to delete task' },{status:500})
    }
}