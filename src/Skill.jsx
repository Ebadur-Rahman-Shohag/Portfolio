import React from "react";
import { Element } from "react-scroll";
import "./Skill.css";

function Skill() {
  return (
    <Element name="skill" className="skill-container">
      <div>
        <h2>Skills</h2>
      </div>
      <div>
        <article>
          <span>Logo</span>
          <h4>HTML&CSS</h4>
          <p>
            Highly skilled in HTML & CSS, adeptly crafting visually appealing
            and responsive websites for optimal user experiences.{" "}
          </p>
        </article>
        <article>
          <span>Logo</span>
          <h4>HTML&CSS</h4>
          <p>
            Highly skilled in HTML & CSS, adeptly crafting visually appealing
            and responsive websites for optimal user experiences.{" "}
          </p>
        </article>
        <article>
          <span>Logo</span>
          <h4>HTML&CSS</h4>
          <p>
            Highly skilled in HTML & CSS, adeptly crafting visually appealing
            and responsive websites for optimal user experiences.{" "}
          </p>
        </article>
      </div>
    </Element>
  );
}

export default Skill;
