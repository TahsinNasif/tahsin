import { Compass, Layers, Bot, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const pillars = [
    {
      title: "UX Strategy",
      description: "Defining clear paths to user success & product growth.",
      icon: Compass,
    },
    {
      title: "Design Systems",
      description: "Building scalable visual frameworks that bridge dev & design.",
      icon: Layers,
    },
    {
      title: "AI Product Design",
      description: "Humanizing complex artificial intelligence modules.",
      icon: Bot,
    },
    {
      title: "Data Visualization",
      description: "Making complex datasets digestible & actionable.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 md:px-16 relative">
      {/* Subtle overlay decorative circle */}
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-[#571bc1]/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Interactive Portrait Frame */}
        <div className="lg:col-span-5 relative">
          <motion.div
            id="about-portrait-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#1d2022]/70 p-2 border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <img
              id="about-portrait-img"
              alt="Alex Morgan Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDI5mIgoOElGkkwHspNm6aXeCEdfWId52-MdA0yMEFG4jeR9lSMcaGe1kF9d87Glrt1xCBR8gy5mT-AnTaquVyPO1ifQKdnexnHQR4XvHWZrHgjSCH8e8E93KrzkZUb7xi3PBdHNnWniZFS4wmeJGUr1avUMCFYSU83ahTwnxzAHqkrfc8aGFzihpKEROfz8vzqqb4r3GxQAl1RJLRpMD4OFhek_xK0GB35maToAaJQzR-yuNiJs3teIiogNbpVLTgtttBC0DieZ0"
            />
          </motion.div>
          {/* Decorative glowing gradient drop under portrait */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#c0c1ff]/15 blur-[60px] -z-20 rounded-full" />
        </div>

        {/* Right: Pitch & Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span
              id="about-meta-tag"
              className="text-[#c0c1ff] font-bold text-xs uppercase tracking-[0.2em] block"
            >
              The Person Behind The Design
            </span>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0e3e5] leading-tight"
            >
              Crafting experiences that bridge the gap between human needs and business goals.
            </h2>
          </div>

          <p
            id="about-description"
            className="text-[#c7c4d7] text-base md:text-lg leading-relaxed font-normal"
          >
            With nearly a decade of experience, I specialize in creating cohesive design
            systems and user-centric interfaces. My approach combines rigorous UX research
            with high-fidelity visual design to solve complex problems for high-growth tech
            companies.
          </p>

          {/* Pillars Grid */}
          <div
            id="about-pillars-grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          >
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  id={`about-pillar-${index}`}
                  key={pillar.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1d2022] flex items-center justify-center text-[#c0c1ff] border border-white/5 shadow-inner flex-shrink-0">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-[#e0e3e5] text-sm md:text-base">
                      {pillar.title}
                    </h4>
                    <p className="text-[#c7c4d7] text-xs md:text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
