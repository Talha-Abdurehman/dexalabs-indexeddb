import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Ecosystem from "@/app/components/Ecosystem";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="w-screen flex flex-col justify-between items-center">
      <header className="w-full z-50">
        <Navbar />
      </header>
      <main className="overflow-x-hidden w-full space-y-12">
        <Hero />
        <About />
        <Ecosystem />
        <FinalCTA />
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
