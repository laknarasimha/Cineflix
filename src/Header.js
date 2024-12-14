import React from "react";
import { FaSearch, FaWallet, FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Top Section: Logo and Navigation */}
      <div className="header-top">
        <div className="logo">CINEFLICKS</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#web-series">Web Series</a>
          <a href="#genres">Genres</a>
        </nav>
        <div className="actions">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search show, movie, genre, etc."
              className="search-input"
            />
          </div>
          <button className="wallet-button">
            <FaWallet className="wallet-icon" />
            Connect Wallet
          </button>
          <FaBars className="menu-icon" />
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner">
        {/* Movie Posters Grid */}
        <div className="poster-grid">
          {[
            "https://m.media-amazon.com/images/I/81dCZeH2KtL._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/91xUjbO4P2L._AC_UF894,1000_QL80_.jpg",
            "https://m.media-amazon.com/images/I/81ZcCMWIQHL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81TSV1GFXRL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91FdYXG-v2L._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81RxVn6Rh4L._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81bd5hy5PWL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81RUufhy1mL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81eRuGJaVHL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81bXHlFKtdL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91Tx-N77vjL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81y2hTOnx9L._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81QeMW3WsSL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91PVf+8hRpL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71dcND9OYLL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71rbZfVFfQL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91C4rsMOc3L._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91kUbNihH0L._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71xGFn6WhbL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/91V3FQq6YqL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81EDtlDbGUL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81KbtYv2GkL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81S8PC64gWL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/81R7vt2NRYL._AC_UL600_FMwebp_QL65_.jpg",
            "https://m.media-amazon.com/images/I/71Kw5NXgyKL._AC_UL600_FMwebp_QL65_.jpg",
          ].map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Movie Poster ${index + 1}`}
              className="poster-image"
            />
          ))}
        </div>

        {/* Text Overlay */}
        <div className="banner-overlay">
          <h1 className="banner-title">Media Streaming the Cineflicks Way</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
