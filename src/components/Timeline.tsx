import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <h2>Academic Background</h2>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="2024 – Present"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Master’s Degree in Computer Science (M1)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineering
          </h4>
          <p>
            Currently pursuing a Master’s program focused on software development, 
            intelligent systems, and data-driven applications.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#fff", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date="2021 – 2024"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor’s Degree in Computer Science
          </h3>
          <p>
            Completed a three-year undergraduate program in computer science.  
            Main subjects included algorithms, databases, web development, 
            software engineering, operating systems, and data analysis.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Before 2021"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Scientific High School Diploma
          </h3>
          <p>
            Focused on mathematics, physics, and computer science fundamentals.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
  );
}
