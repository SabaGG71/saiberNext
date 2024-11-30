import Faqs from "./_components/Faqs.jsx";
import Features from "./_components/Features";
import Hero from "./_components/Hero";
import Integrations from "./_components/Integrations";
import Introduction from "./_components/Introduction";
import LogoTicker from "./_components/LogoTicker";
import Navbar from "./_components/Navbar";
import CallToAction from "./_components/CallToAction";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
