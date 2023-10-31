import TableTasks from "@/components/TableTasks";
import { db } from "@/lib/db";

// Define an interface for the task
interface Task {
  id: string;
  task: string;
  status: string;
}

async function getTasks() {
  const response = await db.task.findMany({
    select: {
      id: true,
      task: true,
      status: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Map the response to the expected structure and convert id to a string
  const tasks = response.map((task: Task) => ({
    id: task.id.toString(),
    task: task.task,
    status: task.status
  }));

  return tasks;
}

export default async function Home() {
  const tasks = await getTasks();
  return (
    <main>
      <TableTasks tasks={tasks} />
    </main>
  );
}
