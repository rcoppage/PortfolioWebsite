import { useEffect, useState } from 'react';
import headshot from '../assets/Headshot.jpg';
import './About.css';

const SkillTag = ({ children, index }) => (
  <span 
    className="skill-tag"
    style={{ 
      animationDelay: `${index * 0.1}s`,
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeInUp 0.6s ease-out forwards'
    }}
  >
    {children}
  </span>
);

const CourseCard = ({ title, index }) => (
  <div 
    className="course-card"
    style={{ 
      animationDelay: `${index * 0.1}s`,
      opacity: 0,
      transform: 'translateY(20px)',
      animation: 'fadeInUp 0.6s ease-out forwards'
    }}
  >
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
    <section id="about" className="about-section">
      <div className="container">
        <h2 className={`main-title ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          About Me
          <div className="title-underline"></div>
        </h2>
        
        <div className="two-columns">
          {/* Left Column */}
          <div className="column">
            <div className="profile-wrapper">
              <div className={`profile-image ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <img src={headshot} alt="Profile" className="image" />
              </div>
            </div>
            
            <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
              <SectionTitle>Who I Am</SectionTitle>
              <p className="bio">
                I am a software engineer and Computer Science student at Georgia Tech, graduating in December 2026 with a 3.6 GPA.
              </p>
              <p className="bio">
                At Waystar, I lead development of production AI chatbot infrastructure for healthcare billing, including RAG, multi-tool agents, evaluation workflows, and persistent conversations. I also research computer vision at Georgia Tech, fine-tuning models to recognize campus landmarks from street-level imagery.
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
                    {programmingLanguages.map((lang, index) => (
                      <SkillTag key={lang} index={index}>{lang}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">AI & LLM Systems</h4>
                  <div className="tags-wrapper">
                    {aiSkills.map((skill, index) => (
                      <SkillTag key={skill} index={index + programmingLanguages.length + technologies.length}>{skill}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">Technologies & Frameworks</h4>
                  <div className="tags-wrapper">
                    {technologies.map((tech, index) => (
                      <SkillTag key={tech} index={index + programmingLanguages.length}>{tech}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">Observability & Data</h4>
                  <div className="tags-wrapper">
                    {dataTools.map((tool, index) => (
                      <SkillTag key={tool} index={index + programmingLanguages.length + technologies.length + aiSkills.length}>{tool}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="courses-section">
              <SectionTitle>Education</SectionTitle>
              <div className="courses-grid">
                <CourseCard title="Georgia Institute of Technology" index={0} />
                <CourseCard title="B.S. Computer Science · GPA 3.6 · Dec 2026" index={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
