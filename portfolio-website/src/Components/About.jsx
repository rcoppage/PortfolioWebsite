import React, { useEffect, useState } from 'react';
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

  const programmingLanguages = ['Java', 'Python', 'PHP', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL', 'C', 'Assembly'];
  const technologies = ['React.js', 'Vue.js', 'Node.js', 'Firebase', 'TensorFlow', 'MongoDB', 'Amazon AWS'];
  const devTools = ['Kubernetes', 'Android Studio', 'Unity', 'IntelliJ', 'Visual Studio Code', 'PyCharm', 'Jupyter Notebooks', 'Git', 'Agile'];
  const courses = ['Data Structures & Algorithms', 'Objects & Design', 'Computer Organization & Programming', 'Linear Algebra', 'Artificial Intelligence', 'Design & Analysis of Algorithms', 'Discrete Mathematics'];

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
                I am a Computer Science student at Georgia Tech, specializing in Intelligence and Systems/Architecture. 
              </p>
              <p className="bio">
              Currently, I work as an Applications Engineer at Waystar and as an Undergraduate Researcher at Georgia Tech, developing AI-powered image recognition for 
              campus mapping. I recently taught Java and Python programming as an instructor at Enchanting Math Academy. Previously, I founded and operated CircuitCycle, 
              where I built custom computers from secondhand parts. I thrive in collaborative team environments and am passionate about developing innovative solutions to
              complex problems.
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
                  <h4 className="category-title">Technologies & Frameworks</h4>
                  <div className="tags-wrapper">
                    {technologies.map((tech, index) => (
                      <SkillTag key={tech} index={index + programmingLanguages.length}>{tech}</SkillTag>
                    ))}
                  </div>
                </div>

                <div className="skill-category">
                  <h4 className="category-title">Development Tools</h4>
                  <div className="tags-wrapper">
                    {devTools.map((tool, index) => (
                      <SkillTag key={tool} index={index + programmingLanguages.length + technologies.length}>{tool}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="courses-section">
              <SectionTitle>Relevant Coursework</SectionTitle>
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <CourseCard key={course} title={course} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
