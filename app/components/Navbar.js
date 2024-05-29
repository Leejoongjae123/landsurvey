import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from 'next/link'
import { redirect } from "next/navigation";
import LoginButtons from "./LoginButtons";

export default function App() {

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/">
        <p className="font-bold text-inherit">GlobalRent</p>
        </Link>
        
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" aria-current="page" color="foreground">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/agency" color="foreground">
            Agency
          </Link>
        </NavbarItem>
      </NavbarContent>
      <LoginButtons></LoginButtons>

    </Navbar>
  );
}
