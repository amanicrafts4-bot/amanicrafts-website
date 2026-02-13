import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function AdminGuard({ children }: { children: ReactNode }) {
  // This is the "Dynamic" part that usually blocks the route
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== 'admin') {
    redirect('/');
  }

  return <>{children}</>;
}
