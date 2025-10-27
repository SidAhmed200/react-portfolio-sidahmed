import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "C++",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Flask",
  "Python",
  "MySQL",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "Linux",
];

const labelsThird = [
  "OpenAI",
  "Hugging Face",
  "Kaggle",
  "Google Colab",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Full Stack Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built several web projects during my studies and personal work, 
              using technologies such as React, Flask, and MySQL. 
              My focus is on creating responsive and efficient applications, 
              following clean code principles and modern web standards.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps & Automation */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I am familiar with version control and deployment tools such as Git, Docker, 
              and Linux environments. I use these technologies to automate workflows, 
              manage development environments, and deploy web applications efficiently.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Artificial Intelligence & Data */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Artificial Intelligence & Data</h3>
            <p>
              I am deeply interested in AI and data science. 
              I experiment with machine learning and large language models using platforms like 
              Google Colab, Hugging Face, and OpenAI APIs. 
              My goal is to develop intelligent and data-driven applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">AI tools:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
