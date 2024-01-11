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
      </div>

      <ul>
        <li>
          <button className="bigButton" id="podcastButton">Podcast </button>
        </li>
        <li>
          <button className="bigButton" id="articleButton">Articles</button>
        </li>
        <li>
          <button className="bigButton" id="interviewButton" onClick={navigateInterview}>Interview</button>
        </li>
      </ul>
    </header>
  );
}
