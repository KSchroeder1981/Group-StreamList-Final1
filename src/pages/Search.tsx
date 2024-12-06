import React, { useState } from "react";
import styles from "../styles/Search.module.css";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([
    { id: 1, title: "Inception", description: "A mind-bending thriller" },
    {
      id: 2,
      title: "The Dark Knight",
      description: "A gritty superhero movie",
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A journey through space and time",
    },
  ]);

  const handleSearch = () => {
    if (!searchTerm) return;
    // Simulate filtering or fetching data
    const filteredResults = results.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults.length > 0 ? filteredResults : []);
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      {results.length > 0 ? (
        <div className={styles.grid}>
          {results.map((movie) => (
            <div key={movie.id} className={styles.card}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.placeholder}>
          No results found. Try searching for something else.
        </p>
      )}
    </div>
  );
};

export default Search;
