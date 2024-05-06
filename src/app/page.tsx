import AboutSectionOne from "@/components/Token/SectionOne";
import AboutSectionTwo from "@/components/Token/SectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import About from "@/components/About";
import Hero from "@/components/Home";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TEKIO Website",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <div className="scroll-container overflow-auto">
      <Hero />
      <About />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Roadmap />
      <Team />
      <ScrollUp />
    </div>
  );
}
