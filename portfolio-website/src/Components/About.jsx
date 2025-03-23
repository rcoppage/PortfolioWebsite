import React from 'react';
import headshot from '../assets/Headshot.jpg';
import './About.css';

const SkillTag = ({ children }) => (
  <span className="skill-tag">{children}</span>
);

const CourseCard = ({ title }) => (
  <div className="course-card">
    <h4 className="card-title">{title}</h4>
  </div>
);

const SectionTitle = ({ children }) => (
  <h3 className="section-title">{children}</h3>
);

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <h2 className="main-title">
        About Me
        <div className="title-underline"></div>
      </h2>
      
      <div className="two-columns">
        {/* Left Column */}
        <div className="column">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={headshot} alt="Profile" className="image" />
            </div>
          </div>
          
          <div>
            <SectionTitle>Who I Am</SectionTitle>
            <p className="bio">
              I am a Computer Science student at Georgia Tech, specializing in Intelligence and Systems/Architecture. 
              As a skilled software developer, I have hands-on experience in multiple programming languages, 
              with a strong foundation in problem-solving and software design principles.
            </p>
            <p className="bio">
              Currently an Undergraduate Researcher at Georgia Tech working on AI-powered image recognition for campus mapping,
              I also teach Java and Python programming as an instructor at Enchanting Math Academy. Previously, I founded and operated 
              CircuitCycle, building custom computers from secondhand parts. I thrive in collaborative team environments and am 
              passionate about developing innovative solutions to complex problems.
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
                  <SkillTag>Java</SkillTag>
                  <SkillTag>Python</SkillTag>
                  <SkillTag>C#</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                  <SkillTag>HTML</SkillTag>
                  <SkillTag>CSS</SkillTag>
                  <SkillTag>SQL</SkillTag>
                  <SkillTag>C</SkillTag>
                  <SkillTag>Assembly</SkillTag>
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">Technologies & Frameworks</h4>
                <div className="tags-wrapper">
                  <SkillTag>React.js</SkillTag>
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Firebase</SkillTag>
                  <SkillTag>TensorFlow</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>Amazon AWS</SkillTag>
                </div>
              </div>

              <div className="skill-category">
                <h4 className="category-title">Development Tools</h4>
                <div className="tags-wrapper">
                  <SkillTag>Android Studio</SkillTag>
                  <SkillTag>Unity</SkillTag>
                  <SkillTag>IntelliJ</SkillTag>
                  <SkillTag>Visual Studio Code</SkillTag>
                  <SkillTag>PyCharm</SkillTag>
                  <SkillTag>Jupyter Notebooks</SkillTag>
                  <SkillTag>Git</SkillTag>
                  <SkillTag>Agile</SkillTag>
                </div>
              </div>
            </div>
          </div>
          
          <div className="courses-section">
            <SectionTitle>Relevant Coursework</SectionTitle>
            <div className="courses-grid">
              <CourseCard title="Data Structures & Algorithms" />
              <CourseCard title="Objects & Design" />
              <CourseCard title="Computer Organization & Programming" />
              <CourseCard title="Linear Algebra" />
              <CourseCard title="Artificial Intelligence" />
              <CourseCard title="Design & Analysis of Algorithms" />
              <CourseCard title="Discrete Mathematics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
