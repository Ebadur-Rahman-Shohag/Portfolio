import React from "react";
import "./About.css";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about" className="about-container">
      <div className="about-content">
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
        <article></article>
      </div>
    </Element>
  );
}

export default About;
