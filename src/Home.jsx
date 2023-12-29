import React from "react";
import "./Home.css"
import { Element } from "react-scroll";

function Home() {
  return (
    <Element className="home-container" to="/" spy={true} smooth={true} offset={50} duration={500}>
      <div className="home-content">
        <article className="home-content-item">
          <h1>I'm Shohag</h1>
          <p>Front End Developer</p>
          <p>Turning Ideas Into Interactive Reality</p>
          <div>
            {/* <a href="#">GitHub</a>
            <a href="#">LinkedIn</a> */}
          </div>
        </article>
        <article className="home-content-image"></article>
      </div>
    </Element>
  );
}

export default Home;
