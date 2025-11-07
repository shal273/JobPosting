// app/Admin/EmployeeView/[employeeID]/page.jsx
import { auth } from '@/app/auth';
import { hrmsAPI } from '@/app/lib/api/client';
import HomeDetails from './HomeDetailsView/page';

export default async function EmployeesServerPage({ params }) {
  const { jobid } = params;

  if (!jobid) throw new Error("job ID is missing in the URL");

  const session = await auth();
  const token = session?.accessToken;

 
  const job = await hrmsAPI.getJobByJobid(jobid, token);
  console.log("🧾 Job details:", job);

 
  const filters = {
    departmentName: job.data.department,
    jobType: job.data.jobType,
  };

const relatedJobs = await hrmsAPI.getRelatedJobs(token, filters);
  // 3️⃣ Fetch related jobs using those filters   const relatedJobs = await hrmsAPI.getRelatedJobs(token, filters);
  console.log("🧾 Related jobs:", relatedJobs);

  return <HomeDetails job={job?.data || {}} relatedJobs={relatedJobs || []} />;
}
