import React from "react";
import styles from "../styles/About.module.css";

const teamMembers = [
  { name: "Temi Sobande-Amon", title: "Program Manager" },
  { name: "Kevin Schroeder", title: "Lead Web Developer" },
  { name: "Jaylene Rodrigues", title: "UI/UX Designer" },
  { name: "Andrew Saunders", title: "Frontend Developer" },
  { name: "Brooke Stanford", title: "Backend Developer" },
  { name: "Felecia Tucker", title: "Quality Assurance Specialist" },
];

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About StreamList</h1>
      <p>
        StreamList is your ultimate platform for managing your favorite movies
        and TV shows. We help you organize, discover, and enjoy entertainment
        effortlessly.
      </p>
      <h2>Meet the Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
