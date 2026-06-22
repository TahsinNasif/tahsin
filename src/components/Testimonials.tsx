import { Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 max-w-7xl mx-auto px-6 md:px-16 space-y-16 relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#571bc1]/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-4">
        <span
          id="testimonials-meta-tag"
          className="text-[#c0c1ff] font-bold text-xs uppercase tracking-[0.2em] block"
        >
          Endorsements
        </span>
        <h2
          id="testimonials-heading"
          className="font-display text-4xl font-bold text-[#e0e3e5]"
        >
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Grid of testimonial elements */}
      <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimony, idx) => (
          <motion.div
            id={`testimonial-card-${testimony.id}`}
            key={testimony.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-[#1d2022]/40 backdrop-blur-md border border-white/5 flex flex-col justify-between hover:border-[#c0c1ff]/20 hover:bg-[#1d2022]/60 transition-all duration-300 relative shadow-lg group"
          >
            {/* Top quote icon decorators */}
            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <MessageSquare className="h-10 w-10 text-[#c0c1ff]" />
            </div>

            {/* Stars row */}
            <div id={`testimonial-rating-${testimony.id}`} className="flex text-[#c0c1ff] gap-1 mb-6">
              {[...Array(testimony.rating)].map((_, i) => (
                <Star key={i} className="h-4.5 w-4.5 fill-[#c0c1ff]" />
              ))}
            </div>

            {/* Quote content */}
            <p className="text-[#c7c4d7] text-sm md:text-base leading-relaxed italic mb-8 flex-grow">
              "{testimony.quote}"
            </p>

            {/* Reviewer identity block */}
            <div id={`testimonial-user-${testimony.id}`} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#272a2c] border border-white/10 flex-shrink-0">
                <img
                  id={`testimonial-avatar-${testimony.id}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  src={testimony.avatar}
                  alt={testimony.name}
                />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-[#e0e3e5]">
                  {testimony.name}
                </div>
                <div className="text-xs text-[#908fa0]">
                  {testimony.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
