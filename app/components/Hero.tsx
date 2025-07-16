"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import MetaTitle from "@/app/components/MetaTitle";

const Hero = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="w-full flex justify-center items-center flex-col pt-2">
      <WavyBackground
        waveWidth={100}
        containerClassName="overflow-hidden w-full max-w-screen"
        className="flex justify-center items-center flex-col gap-3"
      >
        <MetaTitle text={"A Visual Interface / Manager For IndexedDB"} />
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="max-w-2xl text-7xl text-white text-center font-semibold">
            The Missing Devtool for IndexedDB
          </h1>
          <p className="text-xl w-3xl text-center">
            A powerful developer UI for IndexedDB inside your browser.
            Empowering PWA developers with real offline-first tooling.
          </p>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                openSignIn();
              }}
              size={"lg"}
              variant={"default"}
            >
              Get Started <ArrowUpRight />
            </Button>
            <Button size={"lg"} variant={"secondary"}>
              Documentation <BookOpen />
            </Button>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Hero;
