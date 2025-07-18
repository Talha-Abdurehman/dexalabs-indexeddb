import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <div className="bg-gradient-to-b from-black to-primeViolet/50 w-full h-screen backdrop-blur-sm flex justify-center items-center flex-col gap-9">
      <Image
        src="/DexaLabsLogo.svg"
        alt="Dexa Labs Logo"
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center max-w-3xl text-7xl">
          Step Into The Future of Offline-First Development.
        </h1>
        <p className="text-xl w-3xl text-center max-w-2xl font-medium text-neutral-400">
          From visual querying to intuitive inspection, Dexa Labs is redefining
          what&apos;s possible inside the browser.
        </p>
        <Button size={"lg"} variant={"default"}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default FinalCTA;
