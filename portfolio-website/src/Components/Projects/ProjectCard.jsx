import { ArrowUpRight, Github } from 'lucide-react';
import MediaDisplay from './MediaDisplay';

const ProjectCard = ({
  title,
  eyebrow,
  description,
  highlights,
  tags,
  youtubeId,
  imageUrl,
  imageAlt,
  githubLink,
  websiteLink,
  websiteLabel = 'View project'
}) => (
  <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70">
    <div className="w-full aspect-video overflow-hidden relative bg-slate-100 border-b border-slate-100">
      <MediaDisplay youtubeVideoId={youtubeId} imageUrl={imageUrl} alt={imageAlt} title={`${title} demo`} />
    </div>
    <div className="p-6 sm:p-7 flex flex-col flex-grow">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700 mb-2">{eyebrow}</p>
      <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-5">{description}</p>
      <ul className="space-y-2 text-sm text-slate-700 mb-6">
        {highlights.map(highlight => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" aria-hidden="true" /><span>{highlight}</span></li>)}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto mb-6">
        {tags.map(tag => <span key={tag} className="bg-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700">{tag}</span>)}
      </div>
      <div className="flex flex-wrap items-center gap-4 border-t border-slate-100 pt-5">
        {websiteLink && <a href={websiteLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900">{websiteLabel}<ArrowUpRight size={16} aria-hidden="true" /></a>}
        {githubLink && <a href={githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-950"><Github size={16} aria-hidden="true" />Source code</a>}
      </div>
    </div>
  </article>
);

export default ProjectCard;
