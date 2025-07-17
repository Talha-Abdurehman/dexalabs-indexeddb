import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const NavList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-3">
          <NavigationMenuLink asChild>
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link href={"/docs"}>Docs</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link href={"/pricing"}>Pricing</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link href={"/about"}>About</Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link href={"/developers"}>Developers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavList;
