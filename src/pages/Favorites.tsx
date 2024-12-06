import React from "react";
import styles from "../styles/Favorites.module.css";

const Favorites: React.FC = () => {
  const favoriteMovies = [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      badge: "Top Pick",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "A gritty superhero movie",
      badge: "Action",
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey through space and time",
      badge: "Sci-Fi",
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Your Favorites</h1>
      <div className={styles.grid}>
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className={styles.card}>
            <span className={styles.badge}>{movie.badge}</span>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <a href="#" className={styles.button}>
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
