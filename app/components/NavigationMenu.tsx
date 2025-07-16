import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={"/docs"}>Docs</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={"/pricing"}>Pricing</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={"/about"}>About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavList;
