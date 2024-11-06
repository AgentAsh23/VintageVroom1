'use client'

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getAuthStatus } from './actions';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const configurationId = localStorage.getItem('configurationId');
    if (configurationId) setConfigId(configurationId);
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
    staleTime: 10000, // Optional: Adjust stale time as needed
  });

  useEffect(() => {
    if (data?.success) {
      if (configId) {
        localStorage.removeItem('configurationId');
        router.push(`/configure/preview?id=${configId}`);
      } else {
        router.push('/');
      }
    }
  }, [data, configId, router]);

  if (isLoading) {
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100'>
        <Loader2 className='h-10 w-10 animate-spin text-red-600' />
        <h3 className='font-semibold text-2xl mt-4'>Logging you in...</h3>
        <p className='mt-2 text-lg'>You will be redirected automatically.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100'>
        <h3 className='font-semibold text-2xl mt-4 text-red-600'>An error occurred!</h3>
        <p className='mt-2 text-lg'>Please try again later.</p>
        <button 
          className='mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700' 
          onClick={() => router.push('/')}
        >
          Go to Home
        </button>
      </div>
    );
  }

  return null; // Fallback if no loading/error state
};

export default Page;
