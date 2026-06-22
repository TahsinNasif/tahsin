import InteractiveCanvas from "./components/InteractiveCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 80; // compensation for nav heights
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#101415] text-[#e0e3e5] font-sans antialiased selection:bg-[#c0c1ff]/30 selection:text-[#c0c1ff] overflow-x-hidden">
      {/* 
        This is our deep interactive WebGL shader Canvas.
        It sits at the fixed background serving a slow, gorgeous color flow.
      */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-[#101415]">
        <InteractiveCanvas />
      </div>

      {/* Primary Floating Navigation Overlay */}
      <Navbar onContactClick={() => scrollTo("contact")} />

      {/* Core Main View Container */}
      <main className="relative">
        <Hero
          onContactClick={() => scrollTo("contact")}
          onWorkClick={() => scrollTo("work")}
        />

        <Portfolio />

        <Services />

        <About />

        <Timeline />

        <Testimonials />

        <Contact />
      </main>

      {/* Main Footer Block */}
      <Footer />
    </div>
  );
}
