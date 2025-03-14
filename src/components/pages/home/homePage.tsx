import React from "react";
import homePageStyles from "./home.module.css";
import Button from "../../Buttons/button";

const HomePage = () => {
  return (
    <section id="home" className={homePageStyles.home}>
      <div>
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2>Gopi Muppuri.</h2>
      </div>
      <div>
        <h3>I build things for the web.</h3>
      </div>
      <div>
        <p>
          Experienced MERN stack developer with hands-on experience in
          developing robust web applications. Proficient in <span>Node.js</span>{" "}
          ,<span>React.js</span> ,<span>Python</span> and database management
          systems like <span>MySQL</span> and <span> MongoDB</span>. Skilled in
          creating visually appealing interfaces and collaborating with
          cross-functional teams to deliver high-quality solutions.
        </p>
      </div>
      <div>
        <Button value="Explore" href="#certificates" />
      </div>
    </section>
  );
};

export default HomePage;
