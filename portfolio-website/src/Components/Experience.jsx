import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const roles = [
  {
    company: 'Waystar', location: 'Atlanta, Georgia', icon: BriefcaseBusiness,
    positions: [
      { title: 'Software Engineer II', dates: 'May 2026 - Present', bullets: [
        'Leading production AI chatbot infrastructure for healthcare billing, including RAG, multi-tool agents, conversation summarization, and model reasoning views.',
        'Partnering with Anthropic engineers on Opik-based evaluation workflows to improve AI quality, latency, and cost-performance.',
        'Building patient-facing billing agents and scalable session, conversation recall, tool-call tracking, and feedback capabilities.',
        'Mentoring and onboarding a co-op engineer through project guidance, system walkthroughs, and code review.'
      ]},
      { title: 'Software Engineer I', dates: 'Aug 2025 - May 2026', bullets: [
        'Built a RAG-powered internal engineering assistant used by 3,000+ employees.',
        'Led a branded healthcare payments PWA used by millions of patients across PHP, internal APIs, AWS, and SQL.',
        'Reduced wallet production exceptions by 95% through FullStory and Kibana-driven root-cause analysis.'
      ]},
      { title: 'Software Engineer Intern', dates: 'May 2025 - Aug 2025', bullets: [
        'Built a custom MCP server for GitHub Copilot Agent Mode, making AI-assisted code translation 10x faster for 2,000+ engineers.',
        'Shipped enhancements and fixes for a patient portal used by millions of patients with PHP, MySQL, and Vue.js.'
      ]}
    ]
  },
  {
    company: 'Georgia Institute of Technology', location: 'Atlanta, Georgia', icon: GraduationCap,
    positions: [{ title: 'Undergraduate AI Researcher', dates: 'Jan 2025 - Present', bullets: [
      'Developing a computer vision pipeline to recognize Georgia Tech landmarks from street-level imagery.',
      'Curated and clustered a landmark dataset, then fine-tuned MobileNetV3Large and evaluated real-world failure cases.'
    ]}]
  }
];

const Experience = () => (
  <section id="experience" className="py-20 bg-slate-900 text-white scroll-mt-16">
    <div className="max-w-5xl mx-auto px-4">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm text-center mb-3">Career</p>
      <h2 className="text-3xl font-bold text-center mb-12">Experience & Impact</h2>
      <div className="space-y-8">
        {roles.map(({ company, location, icon: Icon, positions }) => (
          <article key={company} className="bg-slate-800/70 border border-slate-700 rounded-xl p-6 md:p-8">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-7">
              <div className="flex items-center gap-3"><span className="p-2 bg-blue-600 rounded-lg"><Icon size={22} /></span><h3 className="text-2xl font-bold">{company}</h3></div>
              <span className="text-slate-400">{location}</span>
            </header>
            <div className="space-y-8 border-l border-slate-600 ml-4 pl-7">
              {positions.map(position => (
                <div key={position.title} className="relative">
                  <span className="absolute -left-[2.05rem] top-2 w-2.5 h-2.5 rounded-full bg-blue-400 ring-4 ring-slate-800" />
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-3"><h4 className="text-xl font-semibold">{position.title}</h4><span className="text-blue-300 text-sm font-medium">{position.dates}</span></div>
                  <ul className="space-y-2 text-slate-300 list-disc pl-5">{position.bullets.map(bullet => <li key={bullet} className="leading-relaxed pl-1">{bullet}</li>)}</ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
