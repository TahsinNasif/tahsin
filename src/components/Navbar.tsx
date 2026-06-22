import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "work", label: "Work" },
    { id: "expertise", label: "Expertise" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple Scrollspy implementation
      const sections = ["hero", "work", "expertise", "about", "contact"];
      let current = "hero";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Securing a comfortable screen trigger position (roughly top 120px)
          if (rect.top <= 120) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 80; // height of floating menu
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled
            ? "bg-[#101415]/85 backdrop-blur-xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display font-extrabold text-[#e0e3e5] tracking-tight text-lg hover:text-[#c0c1ff] transition-colors"
          >
            ALEX MORGAN
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-label-md text-[14px] font-medium tracking-wide uppercase transition-colors duration-200 cursor-pointer ${
                    active ? "text-[#c0c1ff]" : "text-[#c7c4d7] hover:text-[#e0e3e5]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c0c1ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Connect Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-btn-connect"
              onClick={onContactClick}
              className="bg-[#c0c1ff] text-[#1000a9] font-semibold text-xs py-2.5 px-6 rounded-full inline-flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all shadow-[0_4px_20px_rgba(192,193,255,0.15)]"
            >
              Get in Touch
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#e0e3e5] p-2 bg-[#1d2022] hover:bg-[#272a2c] rounded-xl border border-white/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#101415] pt-24 px-6 md:px-12 flex flex-col justify-between pb-10"
          >
            {/* Ambient Background Gradient Glow in overlay */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#8083ff]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#571bc1]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex flex-col gap-8">
              {navItems.map((item, index) => {
                const active = activeSection === item.id;
                return (
                  <motion.button
                    id={`mobile-nav-link-${item.id}`}
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-display text-4xl font-bold tracking-tight py-2 border-b border-white/5 block w-full outline-none ${
                      active ? "text-[#c0c1ff]" : "text-[#c7c4d7] hover:text-[#e0e3e5]"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              id="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <button
                id="mobile-nav-btn-connect"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] text-[#1000a9] font-bold py-4 rounded-xl text-center block"
              >
                Get in Touch
              </button>
              <div className="flex justify-center gap-6 text-[#908fa0] text-sm">
                <a href="#" className="hover:text-[#c0c1ff] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#c0c1ff] transition-colors">Dribbble</a>
                <a href="#" className="hover:text-[#c0c1ff] transition-colors">Read.cv</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
