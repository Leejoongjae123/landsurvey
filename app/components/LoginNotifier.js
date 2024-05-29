'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function LoginNotifier() {
  const searchParams = useSearchParams().get('login');
  const notify = (message) => toast(message);

  useEffect(() => {
    if (searchParams === 'success') {
      notify("Signin Success");
    }
  }, [searchParams]);

  return null;
}