import Image from "next/image";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

const Footer = () => {
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  return (
    <div className="w-full flex justify-between px-8 py-24">
      <div className="flex flex-col gap-3">
        <Image
          src={"/DexaLabsLogo.svg"}
          width={40}
          height={40}
          alt="Dexa Labs Logo"
        />
        <h3 className="text-neutral-400 font-medium">
          Copyright &copy; Dexa Labs {currYear}{" "}
        </h3>
        <div className="flex justify-start items-center gap-3">
          <IconBrandDiscordFilled size={25} />
          <IconBrandFacebookFilled size={25} />
          <IconBrandGithubFilled size={25} />
          <IconBrandInstagramFilled size={25} />
        </div>
      </div>
      <div className="flex justify-center flex-row w-full gap-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold pb-1">Company</h1>
          <h3 className="text-neutral-400">About</h3>
          <h3 className="text-neutral-400">Careers</h3>
          <h3 className="text-neutral-400">Pricing</h3>
          <h3 className="text-neutral-400">Partners</h3>
          <h3 className="text-neutral-400">Terms</h3>
          <h3 className="text-neutral-400">Privacy</h3>
          <h3 className="text-neutral-400">privacy choices</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold pb-1">Solutions</h1>
          <h3 className="text-neutral-400">Dexa Labs IDB</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold pb-1">Documentation</h1>
          <h3 className="text-neutral-400">Quick start</h3>
          <h3 className="text-neutral-400">API</h3>
          <h3 className="text-neutral-400">Architecture</h3>
          <h3 className="text-neutral-400">Dexa Labs</h3>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white font-semibold pb-1">Support</h1>
          <h3 className="text-neutral-400">Quick start</h3>
          <h3 className="text-neutral-400">API</h3>
          <h3 className="text-neutral-400">Architecture</h3>
          <h3 className="text-neutral-400">Dexa Labs</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
