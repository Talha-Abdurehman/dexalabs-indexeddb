"use client";
import { Button } from "@/components/ui/button";
import NavList from "@/app/components/NavigationMenu";
import { FlaskConicalIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" fixed top-0 left-0 w-full  backdrop-blur-xl">
      <div className="flex w-full justify-between items-center xl:px-8 xl:py-2 mx-auto">
        <div className="flex justify-center items-center gap-6">
          <FlaskConicalIcon
            size={35}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // fill={isHovered ? "#FFFFFF" : ""}
            className={`${isHovered ? "fill-white" : ""} `}
          />
          <NavList />
        </div>
        <div className="flex justify-center items-center gap-3">
          <Tooltip title="Designed & Developed by Talha Abdurehman" arrow>
            <Avatar>
              <AvatarImage src={"https://github.com/Talha-Abdurehman.png"} />
              <AvatarFallback>TA</AvatarFallback>
            </Avatar>
          </Tooltip>
          <Button size={"default"} variant={"default"}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
