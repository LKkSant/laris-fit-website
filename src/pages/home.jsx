import Navbar from "../components/navbar"; // Mudou para N maiúsculo
import Hero from "../components/hero";     // Mudou para H maiúsculo
import Meals from "../components/meals";   // Mudou para M maiúsculo
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Pronto! */}
      <Hero />   {/* Pronto! */}
      <Gallery />
      <Benefits />
      <HowItWorks />
      <Meals />  {/* Pronto! */}
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}