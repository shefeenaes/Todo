import TableTasks from "@/components/TableTasks";
import { db } from "@/lib/db";
async function getTasks()
{
  const response = await db.task.findMany(
    {
      select:{
        id: true,
        task: true,
        status: true
      },
      orderBy:{
        createdAt: 'desc'
      }
    }
  );
   // Map the response to the expected structure
   const tasks = response.map(task => ({
    id: task.id,
    task: task.task,
    status: task.status
  }));

  return tasks;
}
export default async function Home() {
  const tasks = await getTasks();
  return (
  <main>
   
      <TableTasks  tasks={tasks} />
  
  </main>
  )
};

