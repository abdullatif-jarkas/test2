// for css
import "./Hero.css";

import { Link } from "react-router-dom";

function Hero({ link, title }) {
  return (
    <header className="hero-background flex">
      <div className="hero-content mini-hero">
        <p className="hero-subtitle">
          <Link to="/">Home</Link>
          <Link to={`/ ${link}`}>{title}</Link>
        </p>
        <h3>{title}</h3>
      </div>
    </header>
  );
}

export default Hero;
