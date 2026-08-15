import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Budgetly',
    eyebrow: 'AI-powered finance platform',
    description: 'A personal finance platform that combines budgeting, savings planning, meal planning, and machine-learning stock recommendations in one product.',
    highlights: [
      'Built a MERN architecture with Firebase authentication and MongoDB Atlas data storage.',
      'Integrated PyTorch recommendations, WebSocket updates, and AWS-hosted services.'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'PyTorch', 'Firebase', 'AWS'],
    youtubeId: 'GPAKiE4Bozk',
    githubLink: 'https://github.com/rcoppage/Hacklytics2025',
    websiteLink: 'https://devpost.com/software/pocketwise',
    websiteLabel: 'View case study'
  },
  {
    title: 'RedireX',
    eyebrow: 'Website migration automation',
    description: 'A link-redirection platform that maps legacy URLs to new destinations to reduce disruption and preserve SEO during site migrations.',
    highlights: [
      'Automated URL discovery and redirection matching with a Python backend.',
      'Deployed backend services on Google Cloud with a React web interface.'
    ],
    tags: ['Python', 'Google Cloud', 'React', 'JavaScript'],
    imageUrl: '/assets/PythonLogo.png',
    imageAlt: 'Python logo representing the RedireX backend',
    githubLink: 'https://github.com/itsdylon/redirx',
    websiteLink: 'https://www.redirx.dev/',
    websiteLabel: 'Visit RedireX'
  },
  {
    title: 'Code Word',
    eyebrow: 'Daily browser game',
    description: 'A responsive word-guessing game with daily challenges, exact-position feedback, and server-backed word retrieval.',
    highlights: [
      'Designed a custom API for daily word storage and retrieval.',
      'Added external dictionary validation to reject invalid guesses.'
    ],
    tags: ['React', 'Node.js', 'REST API', 'JavaScript'],
    imageUrl: '/assets/CodeWord.png',
    imageAlt: 'Code Word game interface',
    websiteLink: 'https://code-word.vercel.app/',
    websiteLabel: 'Play Code Word'
  },
  {
    title: 'WanderSync',
    eyebrow: 'Collaborative Android application',
    description: 'A travel-planning application for shared itineraries, accommodations, dining reservations, and community trip updates.',
    highlights: [
      'Used MVVM architecture to separate UI, state, and data concerns.',
      'Implemented Firebase authentication and real-time trip synchronization.'
    ],
    tags: ['Java', 'Android', 'Firebase', 'MVVM'],
    youtubeId: 'NedWm73jRhI',
    githubLink: 'https://github.com/tmalayvong/CS2340C_Team51',
    websiteLink: 'https://tmalayvong.github.io/CS2340C_Team51/',
    websiteLabel: 'View project'
  }
];

const Projects = () => (
  <section id="projects" className="py-20 sm:py-24 bg-slate-50 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <p className="section-kicker">Selected work</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <h2 className="section-heading">Engineering beyond the day job</h2>
          <p className="section-intro">Four projects selected for technical breadth, working demos, and clear implementation depth.</p>
        </div>
        <a href="https://github.com/rcoppage" target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-700 hover:text-blue-900 whitespace-nowrap">See all GitHub repositories →</a>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        {projects.map(project => <ProjectCard key={project.title} {...project} />)}
      </div>
    </div>
  </section>
);

export default Projects;
