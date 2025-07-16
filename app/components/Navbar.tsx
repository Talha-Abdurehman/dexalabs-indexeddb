import { Button } from "@/components/ui/button";
import NavList from "@/app/components/NavigationMenu";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center xl:px-8 xl:py-2 xl:gap-6 border-b-[1px] border-gray-600 backdrop-blur-2xl">
      <h1 className="text-4xl">Dexa Labs</h1>
      <NavList />
      <div>
        <Button size={"lg"} variant={"default"}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
