// app/Admin/Employees/page.jsx
import { auth } from '@/app/auth';
import { hrmsAPI } from '@/app/lib/api/client';
import Home from './HomeView/page';

export default async function EmployeesServerPage() {
  const session = await auth();
  const token = session?.accessToken;

  const jobs = await hrmsAPI.getJobs()
  console.log('Jobs: ' , jobs)

  return <Home jobs={jobs}  token={token}/> ;

}
