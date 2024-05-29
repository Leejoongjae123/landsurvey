"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from 'next/link'
import { createClient } from "@/utils/supabase/client"; // 상대 경로는 프로젝트 구조에 따라 다를 수 있음

function LoginButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");
  const supabase = createClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser("");
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    // Clean up the subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  console.log('isLoggedIn:',isLoggedIn)
  

  return (
    <NavbarContent justify="end">
      {isLoggedIn ? (
        <>
          <div></div>
          <Button color="primary" variant="flat" onClick={signOut}>
            Signout
          </Button>
        </>
      ) : (
        <>
          <NavbarItem className="lg:flex">
            <Link href="/signin">Sigin</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              <Link href="/signup">Signup</Link>
            </Button>
          </NavbarItem>
        </>
      )}
    </NavbarContent>
  );
}

export default LoginButtons;
