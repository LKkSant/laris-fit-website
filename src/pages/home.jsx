import navbar from "../components/navbar";
import hero from "../components/hero";
import meals from "../components/meals";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
     <navbar />
<hero />
<Gallery />
<Benefits />
<HowItWorks />
<meals />
<Testimonials />
<CTA />
<Footer />
</>
  );
}