"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import MetaTitle from "@/app/components/MetaTitle";
import { FlaskConicalIcon, StarIcon } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const { openSignIn, user } = useClerk();

  return (
    <div className="w-full flex justify-center items-center flex-col pt-2">
      <WavyBackground
        waveWidth={100}
        containerClassName="overflow-hidden w-full max-w-screen"
        className="flex justify-center items-center flex-col gap-3"
      >
        <MetaTitle
          text={"A Visual Interface / Manager For IndexedDB"}
          icon={<FlaskConicalIcon size={20} />}
        />
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-9xl text-white text-center font-semibold">
            Dexa Labs<span className="text-xl">&reg;</span>
          </h1>
          <p className="text-xl w-3xl text-center font-medium">
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
            </Button>{" "}
            <Button size={"lg"} variant={"secondary"}>
              Documentation <BookOpen />
            </Button>
          </div>
          <div className="flex gap-6 pt-4">
            <div className="flex justify-center items-center w-full gap-1">
              <StarIcon color="#c084fc" fill="#c084fc"></StarIcon>
              <StarIcon color="#c084fc" fill="#c084fc"></StarIcon>
              <StarIcon color="#c084fc" fill="#c084fc"></StarIcon>
              <StarIcon color="#c084fc" fill="#c084fc"></StarIcon>
              <StarIcon color="#c084fc" fill="#c084fc"></StarIcon>
            </div>
            <div className="w-full whitespace-nowrap">
              <h1>Over 100+ Five Star Reviews </h1>
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Hero;
