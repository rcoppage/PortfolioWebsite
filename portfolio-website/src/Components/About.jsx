import { useEffect, useState } from 'react';
import headshot from '../assets/Headshot.jpg';
import './About.css';

const SkillTag = ({ children }) => (
  <span className="skill-tag">
    {children}
  </span>
);

const CourseCard = ({ title }) => (
  <div className="course-card">
    <h4 className="card-title">{title}</h4>
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="section-title">{children}</h3>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  const programmingLanguages = ['Python', 'PHP', 'JavaScript', 'Go', 'SQL', 'Java'];
  const technologies = ['React', 'Vue.js', 'Flask', 'AWS', 'Kubernetes', 'Docker', 'Jenkins'];
  const aiSkills = ['RAG', 'MCP', 'Google ADK', 'Opik', 'Prompt Engineering', 'Chatbot Evaluation', 'GitHub Copilot Agent Mode'];
  const dataTools = ['Kibana', 'Grafana', 'OpenSearch', 'FullStory', 'Looker', 'MongoDB', 'Firebase'];

  return (
    <section id="about" className="about-section scroll-mt-16">
      <div className="container">
        <p className="section-kicker text-center">About</p>
        <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>Engineer, researcher, teammate</h2>
        
        <div className="two-columns">
          {/* Left Column */}
          <div className="column">
            <div className="profile-wrapper">
              <div className={`profile-image ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <img src={headshot} alt="Reece Coppage" className="image" loading="lazy" decoding="async" />
              </div>
            </div>
            
            <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
              <SectionTitle>How I work</SectionTitle>
              <p className="bio">
                I am a software engineer and Computer Science student at Georgia Tech, graduating in December 2026 with a 3.6 GPA. My work sits at the intersection of AI systems, full-stack product engineering, and production reliability.
              </p>
              <p className="bio">
                At Waystar, I lead development of production AI chatbot infrastructure for healthcare billing. I care about the parts that turn a demo into a dependable product: evaluation, observability, state, tool-call tracing, latency, and cost. At Georgia Tech, I research computer vision for campus landmark recognition.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="column">
            <div className="skills-section">
              <SectionTitle>Technical Skills</SectionTitle>
              <div className="skills-group">
                <div className="skill-category">
                  <h4 className="category-title">Programming Languages</h4>
                  <div className="tags-wrapper">
                    {programmingLanguages.map(lang => (
                      <SkillTag key={lang}>{lang}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">AI & LLM Systems</h4>
                  <div className="tags-wrapper">
                    {aiSkills.map(skill => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">Technologies & Frameworks</h4>
                  <div className="tags-wrapper">
                    {technologies.map(tech => (
                      <SkillTag key={tech}>{tech}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">Observability & Data</h4>
                  <div className="tags-wrapper">
                    {dataTools.map(tool => (
                      <SkillTag key={tool}>{tool}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="courses-section">
              <SectionTitle>Education</SectionTitle>
              <div className="courses-grid">
                <CourseCard title="Georgia Institute of Technology" />
                <CourseCard title="B.S. Computer Science · GPA 3.6 · Dec 2026" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
