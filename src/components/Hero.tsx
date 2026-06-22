import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export default function Hero({ onContactClick, onWorkClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Decorative Radial Lighting Overlays */}
      <div className="absolute top-20 right-0 w-[45%] h-[45%] bg-gradient-to-bl from-[#8083ff]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-[#571bc1]/8 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-center w-full py-16">
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#1d2022]/70 backdrop-blur-md border border-[#c0c1ff]/20 shadow-[0_5px_15px_rgba(0,0,0,0.15)] max-w-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c0c1ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c0c1ff]"></span>
              </span>
              <span className="text-[11px] font-semibold text-[#c0c1ff] uppercase tracking-[0.2em]">
                Available for Freelance Projects
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#e0e3e5] max-w-4xl mx-auto leading-[1.1] tracking-tight pb-1"
          >
            Designing Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c1ff] via-[#8083ff] to-[#d0bcff]">
              Experiences
            </span>{" "}
            That People Love
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            id="hero-subtitle"
            variants={itemVariants}
            className="font-body text-base md:text-lg text-[#c7c4d7] max-w-2xl mx-auto leading-relaxed"
          >
            I help startups and businesses transform complex ideas into intuitive,
            beautiful, and scalable digital products that deliver high business value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            id="hero-ctas"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <button
              id="hero-btn-work"
              onClick={onWorkClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] text-[#1000a9] font-bold text-sm tracking-wide shadow-[0_10px_35px_rgba(128,131,255,0.25)] hover:scale-[1.03] active:scale-95 transition-all outline-none"
            >
              View My Work
            </button>
            <button
              id="hero-btn-contact"
              onClick={onContactClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1d2022]/80 backdrop-blur-md text-[#e0e3e5] font-semibold text-sm tracking-wide border border-white/10 hover:bg-white/5 active:scale-95 transition-all outline-none inline-flex items-center justify-center gap-1"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4 text-[#c0c1ff]" />
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            id="hero-stats"
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-16 relative"
          >
            {stats.map((stat, i) => (
              <div
                id={`hero-stat-card-${i}`}
                key={stat.label}
                className="p-8 rounded-2xl bg-[#1d2022]/40 backdrop-blur-md border border-white/5 hover:border-[#c0c1ff]/15 hover:bg-[#1d2022]/60 transition-all duration-300 group"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-[#c0c1ff] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[11px] font-bold text-[#c7c4d7] uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
