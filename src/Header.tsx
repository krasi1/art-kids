import React from 'react';
import './App.css';



const Header = () => {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#home">Podcast</a></li>
            <li><a href="#about">Articles</a></li>
            <li><a href="#portfolio">Interview</a></li>
          </ul>
        </nav>
  
        <div className="hero-banner">
          <h1>Art Kids</h1>
        </div>
      </header>
    );
  }
  
  export default Header;