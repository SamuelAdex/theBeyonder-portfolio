import Contact from "@/components/ui/Contact";
import Favourite from "@/components/ui/Favourite";
import Feature from "@/components/ui/Feature";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Vision from "@/components/ui/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Favourite />
      <Vision />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}
