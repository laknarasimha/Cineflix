import React from "react";
import "./Languages.css";

const Languages = () => {
  const languages = [
    { label: "हिंदी", name: "Hindi" },
    { label: "मराठी", name: "Marathi" },
    { label: "ಕನ್ನಡ", name: "Kannada" },
    { label: "அ", name: "Tamil" },
    { label: "EN", name: "English" },
  ];

  return (
    <div className="languages-section">
      <h2 className="languages-title">Watch In Your Language</h2>
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div
            key={index}
            className={`language-card ${
              language.name === "English" ? "active" : ""
            }`}
          >
            <div className="language-label">{language.label}</div>
            <div className="language-name">{language.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
