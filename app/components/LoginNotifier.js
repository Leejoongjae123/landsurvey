'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginNotifier({businescardUrl, setBusinescardUrl,getBusinessCardUrl}) {
  const searchParams = useSearchParams().get('login');
  const notify = (message) => toast(message);
  const userId = useSearchParams().get('id');
  useEffect(() => {
    if (searchParams === 'success') {
      notify("Signin Success");
    }
    if (userId){
      
      getBusinessCardUrl(userId)
    }
    
  }, [searchParams]);

  return null;
}