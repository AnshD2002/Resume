import React, { useState, useRef } from 'react';
import Git from './icons/github.png';
import Email from './icons/email.png';
import Linkedin from './icons/linkedin.png';
import Kaggle from './icons/kaggle.png';
import Gfg from './icons/gfg.png';
import Cert1 from './certificate/Coursera_1.jpg';
import Cert2 from './certificate/Coursera_2.jpg';
import Cert3 from './certificate/Coursera_3.jpg';
import Cert4 from './certificate/Coursera_4.jpg';
import Cert5 from './certificate/Coursera_5.jpg';
import Cert6 from './certificate/Coursera_6.jpg';
import Cert7 from './certificate/Coursera_7.jpg';
import Resume from './resume/AnshDabral_resume.pdf';
import upIcon from './icons/up.png'
import downIcon from './icons/down.png'
import './App.css';

function Header() {
  return (
    <header className="header flex flex-col items-center">
      <div className="name">Ansh Dabral</div>
      <div className='icons'>
        <a href="https://github.com/AnshD2002" target="_blank" rel="noopener noreferrer" className='icon'>
          <img src={Git} alt="GitHub logo" />
        </a>
        <a href="mailto:anshdabral182@gmail.com" target="_blank" rel="noopener noreferrer" className='icon'>
          <img src={Email} alt="Email logo" />
        </a>
        <a href="https://www.linkedin.com/in/ansh-dabral-8847b61b1/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img src={Linkedin} alt="Linkedin logo" />
        </a>
        <a href="https://www.kaggle.com/anshdabral" target="_blank" rel="noopener noreferrer" className='icon'>
          <img src={Kaggle} alt="Kaggle logo" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/anshd8218555/" target="_blank" rel="noopener noreferrer" className='icon'>
          <img src={Gfg} alt="Gfg logo" />
        </a>
      </div>
    </header>
  );
}

function About() {
  const resumeRef = useRef(null);

  const handleResumeDownload = () => {
    resumeRef.current.href = Resume;
    resumeRef.current.download = 'AnshDabral_resume.pdf';
    resumeRef.current.click();
  };

  return (
    <div>
      <h1 className="about">About</h1>
      <p className="text-xl text-center m-3 select-none">
        Hi,<br />
        I'm Ansh Dabral,<br />
        A committed and goal-oriented computer science student 
        looking to pursue a career in the Data Science Domain.<br />
        Possess excellent knowledge in JAVA, PYTHON, MYSQL.<br />
        Ability to learn things quickly and capable of working
        in a fast-paced and team-driven environment.<br />
        Always ready to learn new things and update my knowledge.
      </p>
      <button className="resume-btn" onClick={handleResumeDownload}>Resume</button>
      <a ref={resumeRef} style={{ display: 'none' }} href="#" download></a>
    </div>
  );
}

function Skill() {
  const [activeSkill, setActiveSkill] = useState('technical');

  return (
    <div className="skill-container">
      <div className='skill-head'>Skills</div>
      <div className='skill-buttons'>
        <button className='skill-btn' onClick={() => setActiveSkill('technical')}>
          Technical Skills
        </button>
        <button className='skill-btn' onClick={() => setActiveSkill('interpersonal')}>
          Interpersonal Skills
        </button>
      </div>
      <div className='skill-content m-4'>
        {activeSkill === 'technical' && (
          <div className='text-start ml-10'>
            <h2 className='text-2xl font-bold'>Technical Skills</h2>
            <ul>
              <li className='font-bold pl-2'>• Programming Languages:
                <li className='font-normal pl-10'>Python, Java, MYsql, R, JavaScript, Bash, HTML, CSS, MongoDB</li>
              </li>
              <li className='font-bold pl-2'>• Technologies:
                <li className='font-normal pl-10'>TensorFlow, Scikit-learn, Pandas, Polars, NumPy, Reactjs</li>
              </li>
              <li className='font-bold pl-2'>• Web Technologies:
                <li className='font-normal pl-10'>Django, Streamlit, BeautifulSoup</li>
              </li>
              <li className='font-bold pl-2'>•  Tools:
                <li className='font-normal pl-10'>Jupyter Notebook, GitHub, PowerBI</li>
              </li>
            </ul>
          </div>
        )}
        {activeSkill === 'interpersonal' && (
          <div className='text-start '>
            <h2 className='text-2xl font-bold'>Interpersonal Skills</h2>
            <ul>
              <li className='pl-2'>• Team Collaboration</li>
              <li className='pl-2'>• Problem-Solving</li>
              <li className='pl-2'>• Effective Communication</li>
              <li className='pl-2'>• Team Leadership</li>
              <li className='pl-2'>• Decision Making</li>
              <li className='pl-2'>• Goal Oriented</li>
              <li className='pl-2'>• Creativity</li>
              <li className='pl-2'>• Adaptability</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Resume Website',
      description: 'A personal resume website built with Reactjs',
      languages: 'HTML, CSS, JavaScript, Tailwind',
      date: '2024-05-20',
      repo: 'https://github.com/AnshD2002/Resume_website',
    },
    {
      title: 'Potato Disease',
      description: 'A machine learning project for detecting SMS spam.',
      languages: 'Python',
      date: '2024-02-10',
      repo: 'https://github.com/AnshD2002/potato-disease',
    },
    {
      title: 'Dog Breed Classification',
      description: 'A machine learning project for recommending movies using vectorization.',
      languages: 'Python, Sklearn, Streamlit',
      date: '2024-01-25',
      repo: 'https://github.com/AnshD2002/Dog_breed_classification',
    },
    {
      title: 'Railway Reservation',
      description: 'A Python project for metro route management.',
      languages: 'Java, MySQL, JDBC, Swing',
      date: '2024-03-15',
      repo: 'https://github.com/AnshD2002/Railway_reservation_project',
    },
    {
      title: 'SMS Spam Detection',
      description: 'A machine learning project for detecting SMS spam.',
      languages: 'Python',
      date: '2024-02-10',
      repo: 'https://github.com/AnshD2002/SMS_Spam_Detector',
    },
    {
      title: 'Movie Recommendation System',
      description: 'A machine learning project for recommending movies using vectorization.',
      languages: 'Python, Sklearn, Streamlit',
      date: '2024-01-25',
      repo: 'https://github.com/AnshD2002/movie-recommendation-system',
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="Project-main border-black border-y-2">
      <h1 className="text-5xl font-bold mt-9 mb-6 text-center">My GitHub Projects</h1>
      <div className="projects-container ml-5 mr-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="project border p-4 rounded-lg shadow-md hover:-mt-4 hover:bg-gray-200 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <p className="languages mb-4">{project.languages}</p>
            <p className="text-sm text-gray-600">Last Updated: {project.date}</p>
            <div className="buttons mt-4 flex space-x-4">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Repo
              </a>
              <a
                href={`${project.repo}.git`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Clone Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-more-button"
        >
          <img
            src={showAll ? upIcon : downIcon}
            alt={showAll ? 'Show Less' : 'Show All'}
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
}


function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    { src: Cert1, href: "https://coursera.org/share/1a4cb76d919723603b2d896290fc8ff1", title: "Introduction to Data Science from University of Michigan" },
    { src: Cert2, href: "https://coursera.org/share/ba0983d234572ee79469fb13f0f813bf", title: "Introduction to DL & NN with Keras from IBM" },
    { src: Cert3, href: "https://coursera.org/share/74ec590113bc77df057fc22b1675b62f", title: "Machine Learning Foundations from University of Washington" },
    { src: Cert4, href: "https://coursera.org/share/f781565dd9c475d06781aa65463792da", title: "Introduction to Software Engineering from IBM" },
    { src: Cert5, href: "https://coursera.org/share/21a2c836a6a88a1faf8e45d238c2bb42", title: "AI for Everyone from Deeplearning.AI" },
    { src: Cert6, href: "https://coursera.org/share/61cad562830bd7608ef7a94fc75f85ee", title: "R Programming from Johns Hopkins University" },
    { src: Cert7, href: "https://coursera.org/share/ba0983d234572ee79469fb13f0f813bf", title: "Introduction to Big Data with Spark and Hadoop from IBM" }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <div className='certificates flex flex-col items-center'>
      <div className='certificates-head mb-4'>
        <h2 className="text-5xl font-bold text-center">Certificates</h2>
      </div>
      <div className='flex flex-wrap justify-center mb-4'>
        {visibleCertificates.map((cert, index) => (
          <a
            key={index}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate group m-2"
            aria-label={cert.title}
          >
            <img
              src={cert.src}
              alt={`Certificate ${index + 1}`}
              className="certificate-img w-64 h-auto"
            />
          </a>
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-more-button"
        >
          <img
            src={showAll ? upIcon : downIcon}
            alt={showAll ? 'Show Less' : 'Show All'}
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
}




function Footer() {
  return (
    <div className='footer'>
      © 2024 Ansh Dabral. All rights reserved.
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-5 border-y-2 border-black">
        <About />
      </main>
      <Skill />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
