import React from "react";
import MetaTitle from "./MetaTitle";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LeafIcon } from "lucide-react";
import {
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandVue,
  IconBrandNuxt,
  IconBrandAngular,
} from "@tabler/icons-react";

function Ecosystem() {
  const items = [
    {
      id: 1,

      icon: <IconBrandNodejs size={60} />,
    },
    {
      id: 2,

      icon: <IconBrandNextjs size={60} />,
    },
    {
      id: 3,

      icon: <IconBrandReact size={60} />,
    },
    {
      id: 4,

      icon: <IconBrandVue size={60} />,
    },
    {
      id: 5,
      icon: <IconBrandAngular size={60} />,
    },
    {
      id: 6,

      icon: <IconBrandNuxt size={60} />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 py-24 px-8">
      <MetaTitle text="Ecosystem" icon={<LeafIcon size={20} />} />
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center max-w-3xl text-7xl">
          Seamlessly Works With Your Favourite Stack
        </h1>
        <p className="text-xl w-3xl text-center max-w-2xl font-medium text-neutral-400">
          Dexa Labs offer 50+ integrations for your favourite libraries /
          Frameworks. Injecting it into your developer workflow becomes a
          breeze.
        </p>
        <div className="py-12">
          <InfiniteMovingCards
            pauseOnHover={true}
            speed="slow"
            direction="left"
            items={items}
          />

          <InfiniteMovingCards
            pauseOnHover={true}
            speed="slow"
            direction="right"
            items={items}
          />
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
