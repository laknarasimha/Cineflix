import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import "./App.css";
import Languages from "./Languages";
import HorrorMoviesComponent from "./HorrorMovies";
import TrendingMovies from "./TrendingMovies";

function App() {


  return (
    <div className="app">
      <Header />
      <main>

        <TrendingMovies />
        <HorrorMoviesComponent />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;
