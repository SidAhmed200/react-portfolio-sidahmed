import React from "react";
import Button from "@mui/material/Button";
import "../assets/styles/Project.scss";

// Import des images réelles
import hokokiImage from "../assets/images/hokoki.png";
import vehicleRentalImage from "../assets/images/image.png";
import hokokiAIImage from "../assets/images/hokoki_ai.png";

// Définition des projets avec liens de présentation
const projects = [
  {
    title: "Hokoki – Web & Mobile Platform",
    description: `Hokoki is a full-stack platform I personally designed and developed to simplify task, event, and project management.
It includes both a responsive web app and a mobile version, synchronized in real time with Firebase.
The project focuses on productivity, minimal design, and seamless user experience. It also includes authentication, notifications, and an intuitive dashboard for managing tasks and events.`,
    features: [
      "Real-time synchronization between web and mobile versions",
      "User authentication with Firebase and JWT",
      "Task and event management dashboard",
      "Modern and responsive interface built with React & React Native",
    ],
    tech: ["React", "React Native", "Node.js", "MongoDB", "Firebase"],
    image: hokokiImage,
    presentationLink: "https://youtu.be/lppMmTFXSXw",
  },
  {
    title: "Gestion de Location de Véhicules",
    description: `A complete vehicle rental management system developed with my teammates Nadjoua SAHNOUNE and tamertbour nesrine .
The system handles real-world vehicle rental operations efficiently, including user roles, vehicle management, client details, reservations, and reporting.`,
    features: [
      "User management with roles and permissions (admin, manager, client)",
      "Vehicle management — add, edit, delete, track status",
      "Reservation creation, updates, and automatic cost calculation",
      "Reports and statistics for usage rates and most rented vehicles",
    ],
    tech: ["Java (Swing)", "JDBC", "MySQL (XAMPP)"],
    image: vehicleRentalImage,
    presentationLink: "https://www.linkedin.com/posts/nesrine-tamourtbir-2a21b1336_java-mysql-softwareengineering-ugcPost-7380964394198917121-c7fW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmkkYMBSNdztcMG6H4W2rTFDIVGRW9ISIk",
  },
  {
    title: "Hokoki AI Model",
    description: `An artificial intelligence model developed as part of the Hokoki platform.
This AI model analyzes user tasks, predicts priorities, and suggests optimal scheduling for increased productivity.
It leverages modern machine learning techniques and real-time data analysis to assist users in making smarter decisions.`,
    features: [
      "Task priority prediction using machine learning",
      "Recommendation system for optimal scheduling",
      "Integration with Hokoki platform for real-time assistance",
      "Continuous learning from user behavior to improve suggestions",
    ],
    tech: ["Python", "TensorFlow", "scikit-learn", "Firebase", "Node.js"],
    image: hokokiAIImage,
    presentationLink: "https://youtu.be/lppMmTFXSXw",
  },
];

export default function Project() {
  return (
    <section className="project-section" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <ul className="project-features">
                {proj.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="project-tech">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {proj.presentationLink && (
                <Button
                  variant="contained"
                  onClick={() => window.open(proj.presentationLink, "_blank")}
                  className="btn-presentation"
                  style={{ marginTop: "10px" }}
                >
                  Voir la présentation
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
