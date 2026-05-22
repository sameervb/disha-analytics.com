import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Capabilities from "@/components/Capabilities";
import Pricing from "@/components/Pricing";
import ForInstitutions from "@/components/ForInstitutions";
import DemoCTA from "@/components/DemoCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <Pricing />
        <ForInstitutions />
        <DemoCTA />
      </main>
      <Footer />
    </>
  );
}
