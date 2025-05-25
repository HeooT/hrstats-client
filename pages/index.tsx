'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/company-info');
  }, [router]);
  
  return <div>리디렉션 중...</div>;
}