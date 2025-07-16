import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <header className="w-full z-20">
        <Navbar />
      </header>
      <main className="z-10 overflow-x-hidden w-full">
        <Hero />
      </main>
    </div>
  );
}
