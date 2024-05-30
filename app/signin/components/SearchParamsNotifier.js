'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

export default function SearchParamsNotifier({businesscardUrl, setBusinesscardUrl}) {
  const searchParams = useSearchParams();
  const notify = (message) => toast(message);

  useEffect(() => {
    const signupStatus = searchParams.get("signup");
    if (signupStatus === "success") {
      notify("Signup Success");
    }
    const loginStatus = searchParams.get("login");
    if (loginStatus === "success") {
      notify("Signin Success");
    } else if (loginStatus === "fail") {
      notify("Signin Failed");
    }
    const userId = searchParams.get("id");
    if (userId) {
      setBusinesscardUrl(userId);
    }

  }, [searchParams]);

  return null;
}
