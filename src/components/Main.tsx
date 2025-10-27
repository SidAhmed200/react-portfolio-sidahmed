import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import '../assets/styles/Main.scss';

function Main() {
  // Open mail client
  const handleContact = () => {
    window.location.href = "mailto:mekirisidahmd@gmail.com";
  };

  // Download CV reliably
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_2025-10-22_Sidahmed_Mekiri.pdf"; // must be in public folder
    link.download = "CV_Sidahmed_Mekiri.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container" id="home">
      <div className="about-section">
        {/* Profile Image */}
        <div className="image-wrapper">
          <img
            src='https://media.licdn.com/dms/image/v2/D4D03AQFm5NXtZouEBQ/profile-displayphoto-scale_400_400/B4DZfqM1_rGYAg-/0/1751980926592?e=1762992000&v=beta&t=R9AwqzIVK5jYc5aXev_AlDZ-XcVbjKhiBPgt3T6KVB4'
            alt="Sidahmed Mekiri Avatar"
          />
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Sidahmed Mekiri</h1>
          <p>Full Stack Developer & AI Enthusiast</p>
          <p className="subtitle">
            I’m a Master 1 Software Engineering student passionate about web development, 
            artificial intelligence, and data-driven technologies. I love turning ideas into efficient, 
            elegant, and practical digital solutions, and continuously strive to improve my skills 
            in programming, AI, and software architecture.
          </p>

          {/* Contact & CV Buttons */}
          <div className="contact-cv-section">
            <div className="buttons-wrapper">
              <Button className="btn-contact" onClick={handleContact}>
                Contact me →
              </Button>
              <Button className="btn-cv" onClick={handleDownloadCV}>
                Download CV ⬇
              </Button>

              {/* Social Icons */}
              <div className="social-icons" aria-hidden="true">
                <a
                  className="social-btn"
                  href="https://www.linkedin.com/in/sidahmed-mekiri/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="social-btn"
                  href="https://github.com/sidahmed200"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
