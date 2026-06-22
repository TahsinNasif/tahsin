import { Palette, Search, Layers, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { services, skillsGrouped } from "../data";

export default function Services() {
  const iconMap: Record<string, any> = {
    Palette: Palette,
    Search: Search,
    Layers: Layers,
    Cpu: Cpu,
  };

  return (
    <section id="expertise" className="py-24 max-w-7xl mx-auto px-6 md:px-16 space-y-20 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#c0c1ff]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span
          id="services-meta-tag"
          className="text-[#c0c1ff] font-bold text-xs uppercase tracking-[0.2em] block"
        >
          Expertise
        </span>
        <h2
          id="services-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0e3e5] leading-tight"
        >
          Elevating products through strategic design and technical precision.
        </h2>
      </div>

      {/* Grid of expertise boxes */}
      <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => {
          const IconComponent = iconMap[service.iconName] || Palette;
          return (
            <motion.div
              id={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#1d2022]/40 backdrop-blur-md border border-white/5 hover:border-[#c0c1ff]/20 hover:bg-[#1d2022]/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0b0f10] border border-white/5 flex items-center justify-center text-[#c0c1ff] mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#e0e3e5] mb-3">
                {service.title}
              </h3>
              <p className="text-[#c7c4d7] text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Visual Indicators Bar */}
      <motion.div
        id="skills-visual-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl bg-[#1d2022]/30 backdrop-blur-md border border-white/10 relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#8083ff]/4 rounded-full blur-[80px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Design Category */}
          <div className="space-y-6">
            <h4 className="text-xs font-extrabold text-[#e0e3e5] uppercase tracking-[0.25em] flex items-center gap-1">
              Design
              <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]" />
            </h4>
            <ul className="space-y-5">
              {skillsGrouped.design.map((skill, si) => (
                <li id={`skill-design-${si}`} key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#c7c4d7]">{skill.name}</span>
                    <span className="text-[#c0c1ff]">{skill.level}%</span>
                  </div>
                  {/* Styled indicator line */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Category */}
          <div className="space-y-6">
            <h4 className="text-xs font-extrabold text-[#e0e3e5] uppercase tracking-[0.25em] flex items-center gap-1">
              Research
              <span className="w-1.5 h-1.5 rounded-full bg-[#8083ff]" />
            </h4>
            <ul className="space-y-5">
              {skillsGrouped.research.map((skill, si) => (
                <li id={`skill-research-${si}`} key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#c7c4d7]">{skill.name}</span>
                    <span className="text-[#c0c1ff]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Category */}
          <div className="space-y-6">
            <h4 className="text-xs font-extrabold text-[#e0e3e5] uppercase tracking-[0.25em] flex items-center gap-1">
              Tools
              <span className="w-1.5 h-1.5 rounded-full bg-[#d0bcff]" />
            </h4>
            <ul className="space-y-5">
              {skillsGrouped.tools.map((skill, si) => (
                <li id={`skill-tools-${si}`} key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#c7c4d7]">{skill.name}</span>
                    <span className="text-[#c0c1ff]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Category */}
          <div className="space-y-6">
            <h4 className="text-xs font-extrabold text-[#e0e3e5] uppercase tracking-[0.25em] flex items-center gap-1">
              Collaboration
              <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]" />
            </h4>
            <ul className="space-y-5">
              {skillsGrouped.collaboration.map((skill, si) => (
                <li id={`skill-collab-${si}`} key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#c7c4d7]">{skill.name}</span>
                    <span className="text-[#c0c1ff]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
