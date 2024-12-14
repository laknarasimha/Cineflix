import React from "react";
import "./Section.css";

const Section = ({ title, movies }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
