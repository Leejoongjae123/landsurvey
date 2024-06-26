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
    }else if (searchParams === 'fail') {
      notify("Signin fail. try again.");
    }else if(searchParams==='reset'){
      notify("Check your Email");
    }

    if (userId){
      
      getBusinessCardUrl(userId)
    }
    
  }, [searchParams]);

  return null;
}