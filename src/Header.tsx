import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navigateInterview = () => {
    navigate("/interview");
  };
  const navigateArticles = () => {
    navigate("/articles");
  };
  // const navigatePodcast = () => {
  //   navigate("/podcast");
  // };
  const navigateStatistics = () => {
    navigate("/statistics");
  };
  const navigateHome = () => {
    if (!isHomePage) {
      navigate("/");
    }
  };

  return (
    <header>
      <ul>
        <li>
          <button id="homeButton" className="bigButton" onClick={navigateHome}>
            &#x2302;
          </button>
        </li>
        <li>
          <button className="bigButton" id="podcastButton">
            Podcast
          </button>
        </li>
        <li>
          <button
            className="bigButton"
            id="articleButton"
            onClick={navigateArticles}
          >
            Articles
          </button>
        </li>
        <li>
          <button
            className="bigButton"
            id="interviewButton"
            onClick={navigateInterview}
          >
            Interview
          </button>
        </li>

        <li>
          <button
            className="bigButton"
            id="statisticButton"
            onClick={navigateStatistics}
          >
            Statistics
          </button>
        </li>
      </ul>
    </header>
  );
}
