import { redirect } from 'next/navigation';
import { auth } from '@/app/auth'; // server-side auth

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect('/Login');
  }
}
