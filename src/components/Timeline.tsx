import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { timelineEvents } from "../data";

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#1d2022]/40 border-y border-white/5 relative">
      {/* Dynamic line glow back plates */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8083ff]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h2
          id="timeline-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0e3e5] text-center mb-20"
        >
          Career Journey
        </h2>

        {/* Timeline Line Structuring */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#c0c1ff]/50 before:to-transparent">
          {timelineEvents.map((event, idx) => (
            <motion.div
              id={`timeline-event-${event.id}`}
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Pulsate Icon Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#c0c1ff] bg-[#101415] text-[#c0c1ff] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 group-hover:bg-[#c0c1ff] group-hover:text-[#1000a9]">
                <Briefcase className="h-4.5 w-4.5" />
              </div>

              {/* Grid Box */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-[#1d2022] hover:bg-[#1d2022]/80 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-[#c0c1ff]/30 shadow-lg hover:shadow-[#c0c1ff]/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="font-bold text-lg sm:text-xl text-[#e0e3e5] group-hover:text-[#c0c1ff] transition-colors">
                    {event.role}
                  </div>
                  <time className="font-semibold text-xs text-[#c0c1ff] uppercase tracking-wider bg-[#c0c1ff]/10 py-1 px-3 rounded-full border border-[#c0c1ff]/10 w-fit">
                    {event.period}
                  </time>
                </div>
                <div className="text-[#c7c4d7] font-medium text-xs sm:text-sm mb-4 uppercase tracking-wide">
                  {event.company}
                </div>
                <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
