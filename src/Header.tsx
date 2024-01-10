import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Header() {
  const navigate = useNavigate();

  const navigateInterview = () => {
    navigate("/interview");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <header>
      <button id="homeButton" onClick={navigateHome}>
        &#x2302;
      </button>
      <div className="hero-banner">
        <h1 className="header-title">Art Kids</h1>
      </div>

      <ul>
        <li>
          <button id="bigButton">Podcast </button>
        </li>
        <li>
          <button id="bigButton">Articles</button>
        </li>
        <li>
          <button id="bigButton" onClick={navigateInterview}>Interview</button>
        </li>
      </ul>
    </header>
  );
}
