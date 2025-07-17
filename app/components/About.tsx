import React from "react";
import MetaTitle from "./MetaTitle";
import {
  BadgeQuestionMarkIcon,
  SparklesIcon,
  MonitorDotIcon,
  LockKeyholeIcon,
  CircuitBoardIcon,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { FeaturesSectionDemo } from "@/components/ui/feature-section-demo";
const About = () => {
  const features = [
    {
      id: 1,
      title: "Visual DB Manager",
      para: "A clean and intuitive interface to create DBs, Object Stores, Indexes and CRUD Operations without touching code.",
      icon: <MonitorDotIcon size={30} />,
    },
    {
      id: 2,
      title: "Supercharged with AI",
      para: "Live synchronization with your app's data layer. Useful for debugging and monitoring.",
      icon: <SparklesIcon size={30} />,
    },

    {
      id: 3,
      title: "Secure, Local First Design",
      para: "All operations are performed locally in your browser, no backend required.",
      icon: <LockKeyholeIcon size={30} />,
    },

    {
      id: 4,
      title: "DevTools Integration",
      para: "Easily plug Dexa Labs into your development workflow. It works seamlessly.",
      icon: <CircuitBoardIcon size={30} />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-24 gap-3 px-8">
      <MetaTitle
        text="Why Dexa Labs"
        icon={<BadgeQuestionMarkIcon size={20} />}
      />
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center max-w-3xl text-7xl">
          Built By Developers For Developers
        </h1>
        <p className="text-xl w-3xl text-center max-w-2xl">
          Dexa Labs brings full control of IndexedDB to your browser with ZERO
          friction.
        </p>

        <ContainerScroll titleComponent={<h1></h1>}>
          <Image
            width={1280}
            height={200}
            src={"/DEXA_LABS_DASHBOARD.png"}
            alt="Dashboard-Image"
          />
        </ContainerScroll>
      </div>
      <div className="flex flex-col items-center w-full h-full gap-3 py-24">
        <h1 className="text-center max-w-3xl text-7xl">Packed With Features</h1>
        <FeaturesSectionDemo />
      </div>
    </div>
  );
};

export default About;
