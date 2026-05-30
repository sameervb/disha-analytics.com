import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductIntro from "@/components/ProductIntro";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import Pricing from "@/components/Pricing";
import DemoCTA from "@/components/DemoCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductIntro />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <Pricing />
        <DemoCTA />
      </main>
      <Footer />
    </>
  );
}
