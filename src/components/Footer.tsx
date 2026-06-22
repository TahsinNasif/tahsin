import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Read.cv", href: "#" },
    { label: "Layers", href: "#" },
  ];

  return (
    <footer id="footer" className="bg-[#101415] border-t border-[#464554]/30 w-full py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            id="footer-logo"
            href="#"
            onClick={handleLogoClick}
            className="font-display font-extrabold text-sm sm:text-base text-[#e0e3e5] tracking-widest hover:text-[#c0c1ff] transition-colors"
          >
            ALEX MORGAN
          </a>
          <p id="footer-copy" className="text-xs text-[#908fa0] font-medium">
            &copy; {currentYear} Alex Morgan. Built with precision.
          </p>
        </div>

        {/* Right side social markers */}
        <div id="footer-social-links" className="flex flex-wrap justify-center gap-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-[#908fa0] hover:text-[#c0c1ff] text-xs sm:text-sm font-semibold tracking-wide transition-colors hover:scale-105 transform duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
