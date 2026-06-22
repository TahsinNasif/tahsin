import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, History, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SentMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [outbox, setOutbox] = useState<SentMessage[]>(() => {
    const saved = localStorage.getItem("alex_portfolio_outbox");
    return saved ? JSON.parse(saved) : [];
  });
  const [showOutboxList, setShowOutboxList] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      ...{ [name]: value },
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please populate all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate short network delay
    setTimeout(() => {
      const newMessage: SentMessage = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      const updatedOutbox = [newMessage, ...outbox];
      setOutbox(updatedOutbox);
      localStorage.setItem("alex_portfolio_outbox", JSON.stringify(updatedOutbox));

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "Project Inquiry",
        message: "",
      });

      // Auto clear success screen after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1200);
  };

  const deleteOutboxMessage = (id: string) => {
    const updated = outbox.filter((m) => m.id !== id);
    setOutbox(updated);
    localStorage.setItem("alex_portfolio_outbox", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Absolute top flowing light flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[#8083ff]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="bg-[#1d2022]/60 backdrop-blur-md rounded-[48px] p-8 md:p-12 lg:p-16 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left pitch and quick details */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span
                  id="contact-meta-tag"
                  className="text-[#c0c1ff] font-bold text-xs uppercase tracking-[0.2em] block"
                >
                  Get In Touch
                </span>
                <h2
                  id="contact-heading"
                  className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0e3e5] leading-tight"
                >
                  Let's Build Something Great Together
                </h2>
                <p id="contact-description" className="text-[#c7c4d7] text-sm sm:text-base leading-relaxed font-normal">
                  I'm always open to discussing new projects, creative ideas, or custom
                  opportunities to be part of your digital product vision.
                </p>
              </div>

              {/* Specifications panel */}
              <div id="contact-details-box" className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1d2022] flex items-center justify-center text-[#c0c1ff] border border-white/5 shadow-inner">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#908fa0] tracking-widest">
                      Email Me
                    </div>
                    <a
                      href="mailto:hello@alexmorgan.com"
                      className="text-base sm:text-lg font-bold text-[#e0e3e5] hover:text-[#c0c1ff] transition-colors"
                    >
                      hello@alexmorgan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1d2022] flex items-center justify-center text-[#c0c1ff] border border-white/5 shadow-inner">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#908fa0] tracking-widest">
                      Location
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#e0e3e5]">
                      New York, NY (Remote)
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Outbox Checker link */}
              {outbox.length > 0 && (
                <div id="contact-outbox-utility" className="pt-8 border-t border-white/5">
                  <button
                    onClick={() => setShowOutboxList(!showOutboxList)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#c0c1ff] hover:text-white transition-colors outline-none cursor-pointer"
                  >
                    <History className="h-4 w-4" />
                    {showOutboxList ? "Hide Outbox" : `View Saved Outbox (${outbox.length})`}
                  </button>
                </div>
              )}
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    id="contact-success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-3xl bg-[#0b0f10]/80 border border-[#c0c1ff]/20 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#c0c1ff]/10 text-[#c0c1ff] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-2xl font-bold text-[#e0e3e5]">
                        Message Transmitted!
                      </h4>
                      <p className="text-[#c7c4d7] text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. Your transmission was cataloged into the outbox system, and Alex will respond shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="px-6 py-2.5 bg-[#1d2022] hover:bg-white/5 text-xs font-semibold uppercase tracking-wider text-[#e0e3e5] rounded-xl border border-white/10 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    id="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[#c7c4d7] ml-1">
                          Name
                        </label>
                        <input
                          id="contact-input-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#1d2022] border border-white/15 focus:border-[#c0c1ff] rounded-xl px-4 py-3 placeholder-[#908fa0] text-sm text-[#e0e3e5] outline-none transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[#c7c4d7] ml-1">
                          Email
                        </label>
                        <input
                          id="contact-input-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#1d2022] border border-white/15 focus:border-[#c0c1ff] rounded-xl px-4 py-3 placeholder-[#908fa0] text-sm text-[#e0e3e5] outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#c7c4d7] ml-1">
                        Subject
                      </label>
                      <select
                        id="contact-select-subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-[#1d2022] border border-white/15 focus:border-[#c0c1ff] rounded-xl px-4 py-3 text-sm text-[#e0e3e5] outline-none transition-colors cursor-pointer"
                      >
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Saying Hello">Saying Hello</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[#c7c4d7] ml-1">
                        Message
                      </label>
                      <textarea
                        id="contact-textarea-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#1d2022] border border-white/15 focus:border-[#c0c1ff] rounded-xl px-4 py-3 placeholder-[#908fa0] text-sm text-[#e0e3e5] outline-none transition-colors resize-none"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <button
                      id="contact-btn-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#c0c1ff] to-[#8083ff] disabled:opacity-50 text-[#1000a9] font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(128,131,255,0.2)] hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer outline-none"
                    >
                      {isSubmitting ? (
                        <>Transmission in progress...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Saved outbox messages list container */}
        <AnimatePresence>
          {showOutboxList && outbox.length > 0 && (
            <motion.div
              id="contact-outbox-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 sm:p-8 bg-[#1d2022]/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden space-y-6"
            >
              <div className="flex justify-between items-center">
                <h5 className="font-display font-bold text-sm text-[#e0e3e5] uppercase tracking-wider">
                  Outbox Transmission Log
                </h5>
                <button
                  onClick={() => {
                    setOutbox([]);
                    localStorage.removeItem("alex_portfolio_outbox");
                  }}
                  className="text-[#908fa0] hover:text-red-400 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                  Clear Outbox
                </button>
              </div>

              <div id="contact-outbox-list" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outbox.map((msg) => (
                  <div
                    id={`outbox-msg-${msg.id}`}
                    key={msg.id}
                    className="p-5 rounded-2xl bg-[#0b0f10]/60 border border-white/5 space-y-3 relative group"
                  >
                    <button
                      onClick={() => deleteOutboxMessage(msg.id)}
                      className="absolute top-4 right-4 text-[#908fa0] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#c0c1ff] bg-[#c0c1ff]/10 px-2 py-0.5 rounded-full">
                        {msg.subject}
                      </span>
                      <span className="text-[#908fa0]">{msg.timestamp}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#e0e3e5]">{msg.name}</div>
                      <div className="text-xs text-[#908fa0]">{msg.email}</div>
                    </div>
                    <p className="text-[#c7c4d7] text-xs line-clamp-3 leading-relaxed border-t border-white/5 pt-2">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
