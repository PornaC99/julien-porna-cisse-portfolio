import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto url with drafted content so it genuinely sends
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Julien,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Julien Porna Cissé"
      className="py-20 sm:py-28 border-b border-[#27292D] bg-[#0B0C0E]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#27292D]">
          <div className="font-mono text-xs uppercase tracking-widest text-[#55D69B] mb-2 font-semibold">
            07 — CONTACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F1ED] leading-tight">
            LET&apos;S BUILD SOMETHING USEFUL.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-2xl leading-relaxed">
            I&apos;m currently looking for opportunities to contribute to real-world web development projects, learn from experienced teams and continue growing as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#121418] border border-[#27292D] rounded-xl p-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#9A9CA3] block mb-3">
                PRIMARY EMAIL
              </span>

              <div className="flex items-center justify-between gap-3 p-3 bg-[#0B0C0E] border border-[#222429] rounded-lg">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-xs sm:text-sm text-[#F2F1ED] hover:text-[#55D69B] truncate transition-colors focus:outline-none"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="shrink-0 p-2 rounded bg-[#17191E] border border-[#27292D] text-[#9A9CA3] hover:text-[#F2F1ED] transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-[#55D69B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="font-mono text-[11px] text-[#55D69B] mt-2 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </p>
              )}

              <div className="mt-4">
                <a
                  id="contact-cta-get-in-touch"
                  href={`mailto:${PERSONAL_INFO.email}?subject=Web%20Development%20Opportunity`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-mono font-medium text-[#0B0C0E] bg-[#55D69B] hover:bg-[#43c085] transition-all shadow-md active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4" />
                  <span>GET IN TOUCH ↗</span>
                </a>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121418] border border-[#27292D] hover:border-[#3E434D] hover:bg-[#16181E] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#9A9CA3] group-hover:text-[#F2F1ED]" />
                  <span className="font-mono text-xs text-[#F2F1ED] font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#55D69B]" />
              </a>

              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-4 rounded-xl bg-[#121418] border border-[#27292D] hover:border-[#3E434D] hover:bg-[#16181E] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#9A9CA3] group-hover:text-[#F2F1ED]" />
                  <span className="font-mono text-xs text-[#F2F1ED] font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#55D69B]" />
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-[#0E1013] border border-[#222429] font-mono text-xs text-[#9A9CA3] space-y-1">
              <div className="text-[#F2F1ED] font-medium">Location: Greater Noida, UP, India</div>
              <div>Available for full-time internships, on-site, hybrid or remote.</div>
            </div>

          </div>

          {/* Right Column: Interactive Working Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-[#27292D] rounded-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#222429]">
                <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-wider flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#55D69B]" />
                  <span>DIRECT MESSAGE COMPOSER</span>
                </span>
                <span className="font-mono text-[10px] text-[#55D69B] bg-[#55D69B]/10 px-2 py-0.5 rounded">
                  Launches Mail Client
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[#9A9CA3] mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0C0E] border border-[#27292D] text-[#F2F1ED] placeholder-[#555861] text-sm focus:outline-none focus:border-[#55D69B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[#9A9CA3] mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0C0E] border border-[#27292D] text-[#F2F1ED] placeholder-[#555861] text-sm focus:outline-none focus:border-[#55D69B]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-[#9A9CA3] mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="Web Development Internship / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0C0E] border border-[#27292D] text-[#F2F1ED] placeholder-[#555861] text-sm focus:outline-none focus:border-[#55D69B]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#9A9CA3] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Describe your project, team opportunity, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0C0E] border border-[#27292D] text-[#F2F1ED] placeholder-[#555861] text-sm focus:outline-none focus:border-[#55D69B] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-mono font-medium text-[#0B0C0E] bg-[#55D69B] hover:bg-[#43be83] transition-all shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#55D69B]"
                >
                  <Send className="w-4 h-4" />
                  <span>PREPARE &amp; SEND EMAIL ↗</span>
                </button>

                {submitted && (
                  <p className="text-xs font-mono text-[#55D69B] text-center pt-2">
                    ✓ Email application opened with your drafted message.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
