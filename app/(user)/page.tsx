// import { Toaster } from "react-hot-toast";
import { AboutSection } from "./_component/about/AboutSection";
import { HeroSection } from "./_component/hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </>
  );
}
