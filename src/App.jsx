import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";

function App() {
  return (
    <div className="bg-[#050816] min-h-screen">
      <Navbar />
      <div className="h-24"></div>

      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;