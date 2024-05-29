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
import CustomerLink from "./CustomerLink";
import AgencyLink from "./AgencyLink";

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
          <CustomerLink></CustomerLink>
        </NavbarItem>
        <NavbarItem>
          <AgencyLink></AgencyLink>
        </NavbarItem>
      </NavbarContent>
      <LoginButtons></LoginButtons>

    </Navbar>
  );
}
