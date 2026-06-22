import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { projects } from "../data";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 360,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -360,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="work" className="py-24 bg-[#0b0f10]/80 relative border-y border-white/5">
      {/* Glow asset */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#8083ff]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header bar with controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span
              id="portfolio-meta-tag"
              className="text-[#c0c1ff] font-bold text-xs uppercase tracking-[0.2em] block"
            >
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-[#e0e3e5]"
            >
              Selected Case Studies
            </h2>
          </div>

          <div id="portfolio-controls" className="flex gap-4">
            <button
              id="portfolio-arrow-prev"
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e0e3e5] hover:bg-[#c0c1ff] hover:text-[#1000a9] hover:border-transparent active:scale-90 transition-all duration-300"
              aria-label="Previous Project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              id="portfolio-arrow-next"
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#e0e3e5] hover:bg-[#c0c1ff] hover:text-[#1000a9] hover:border-transparent active:scale-90 transition-all duration-300"
              aria-label="Next Project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bento Case studies Grid */}
        <div
          id="portfolio-cards-container"
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 scroll-smooth no-scrollbar snap-x"
        >
          {projects.map((project, idx) => (
            <motion.div
              id={`portfolio-card-${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex-shrink-0 w-[300px] sm:w-[350px] lg:w-full snap-center bg-[#1d2022]/40 backdrop-blur-md rounded-3xl p-4 flex flex-col h-full border border-white/5 hover:border-[#c0c1ff]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-[#101415]/80 via-transparent to-transparent z-10" />
                <img
                  id={`portfolio-img-${project.id}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={project.image}
                  alt={project.altText}
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3.5 py-1 rounded-full bg-[#101415]/80 backdrop-blur-md text-xs font-semibold text-[#c0c1ff] border border-[#c0c1ff]/20">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="px-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#e0e3e5] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#c7c4d7] text-sm leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Visual key metrics bar */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                    {project.metrics.map((metric, mi) => (
                      <div id={`portfolio-metric-${project.id}-${mi}`} key={metric.label}>
                        <div className="text-[#c0c1ff] font-extrabold text-2xl leading-none">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase text-[#c7c4d7] tracking-wider font-bold mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    id={`portfolio-btn-view-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c0c1ff] group-hover:text-white transition-colors duration-200 outline-none"
                  >
                    View Case Study
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="case-study-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#101415]/95 backdrop-blur-md overflow-y-auto px-4 py-8 sm:p-8"
          >
            <motion.div
              id="case-study-modal-container"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-4xl mx-auto bg-[#1d2022] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header Cover Banner */}
              <div className="relative h-64 sm:h-96 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2022] via-[#1d2022]/40 to-black/50 z-10" />
                <img
                  id="case-study-banner-img"
                  referrerPolicy="no-referrer"
                  src={selectedProject.image}
                  alt={selectedProject.altText}
                  className="w-full h-full object-cover"
                />

                {/* Close Button Pin */}
                <button
                  id="case-study-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-md hover:bg-[#c0c1ff] hover:text-[#1000a9] text-[#e0e3e5] p-2.5 rounded-full border border-white/10 transition-all active:scale-95 cursor-pointer outline-none"
                  aria-label="Close Case Study"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Cover Title Metadata */}
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-[#c0c1ff]/20 backdrop-blur-md text-[#c0c1ff] border border-[#c0c1ff]/30 font-bold tracking-wide uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#e0e3e5]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Informational Grid */}
              <div className="p-6 sm:p-10 space-y-10">
                {/* Specs Box */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-[#0b0f10]/60 border border-white/5">
                  <div>
                    <span className="text-[#908fa0] text-[10px] uppercase font-bold tracking-wider">Role</span>
                    <div className="text-sm font-semibold text-[#e0e3e5] mt-1">{selectedProject.role}</div>
                  </div>
                  <div>
                    <span className="text-[#908fa0] text-[10px] uppercase font-bold tracking-wider">Timeline</span>
                    <div className="text-sm font-semibold text-[#e0e3e5] mt-1">{selectedProject.timeline}</div>
                  </div>
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="text-[#908fa0] text-[10px] uppercase font-bold tracking-wider">{metric.label}</span>
                      <div className="text-lg font-bold text-[#c0c1ff] mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Overview & Core Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-[#c0c1ff] uppercase tracking-wide inline-flex items-center gap-1.5">
                      <Sparkles className="h-4.5 w-4.5" />
                      About Case
                    </h4>
                    <p className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-[#c0c1ff] uppercase tracking-wide">
                      Core Challenge
                    </h4>
                    <p className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                </div>

                {/* Divider lines */}
                <div className="h-px bg-white/5" />

                {/* Process Steps List */}
                <div className="space-y-6">
                  <h4 className="font-display text-xl font-bold text-[#e0e3e5]">
                    Methodology & Design Lifecycle
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.process.map((step, idx) => (
                      <div
                        id={`process-step-${idx}`}
                        key={idx}
                        className="flex gap-4 p-4 rounded-xl bg-[#0b0f10]/30 border border-white/5 items-start"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1000a9] text-[#c0c1ff] flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-[#c7c4d7] text-sm leading-relaxed pt-1">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Summary */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1000a9]/30 to-[#571bc1]/20 border border-[#c0c1ff]/10 space-y-4">
                  <h4 className="font-display text-lg font-bold text-[#e0e3e5] inline-flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c0c1ff]" />
                    Design Solution & Delivery
                  </h4>
                  <p className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Footer Controls */}
                <div className="flex justify-end pt-4">
                  <button
                    id="case-study-close-lower"
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-[#1d2022] hover:bg-[#c0c1ff] hover:text-[#1000a9] text-[#e0e3e5] text-xs font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-colors cursor-pointer outline-none"
                  >
                    Close Reading
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
