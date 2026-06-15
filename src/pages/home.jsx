import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Meals from "../components/meals";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
     <Navbar />
<Hero />
<Gallery />
<Benefits />
<HowItWorks />
<Meals />
<Testimonials />
<CTA />
<Footer />
</>
  );
}