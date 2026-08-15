import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="bg-slate-950 text-white scroll-mt-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7 sm:p-10 md:p-12">
        <p className="section-kicker">Let&apos;s talk</p>
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Building a serious product or AI platform?</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">I&apos;m interested in software engineering, backend, full-stack, and AI engineering conversations where reliability and user impact matter.</p>
          </div>
          <a href="mailto:rcoppage6@gatech.edu" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap">Email Reece <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-10 pt-7 border-t border-slate-700 text-sm">
          <a href="mailto:rcoppage6@gatech.edu" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Mail size={18} aria-hidden="true" />rcoppage6@gatech.edu</a>
          <a href="https://www.linkedin.com/in/rcoppage/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Linkedin size={18} aria-hidden="true" />LinkedIn</a>
          <a href="https://github.com/rcoppage" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Github size={18} aria-hidden="true" />GitHub</a>
        </div>
      </div>
    </div>
    <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">Designed and built by Reece Coppage.</footer>
  </section>
);

export default Contact;
