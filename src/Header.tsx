import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navigateInterview = () => {
    navigate("/art-kids/interview");
  };
  const navigateArticles = () => {
    navigate("/art-kids/articles");
  };
  const navigatePodcast = () => {
    navigate("/art-kids/podcast");
  };
  const navigateStatistics = () => {
    navigate("/art-kids/statistics");
  };
  const navigateHome = () => {
    if (!isHomePage) {
      navigate("/art-kids/");
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
          <button className="bigButton" id="podcastButton" onClick={navigatePodcast}>
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
