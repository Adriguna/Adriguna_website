import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import WhyChoose from "../sections/WhyChoose";
import Process from "../sections/Process";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;