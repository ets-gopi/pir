import React from "react";
import homePageStyles from "./home.module.css";
import Button from "../../Buttons/button";

const HomePage = () => {
  return (
    <section id="home" className={homePageStyles.home}>
      <div>Hi, my name is</div>
      <h1>Gopi Muppuri.</h1>
      <h3>I build things for the web.</h3>
      <p>
        Experienced MERN stack developer with hands-on experience in developing
        robust web applications. Proficient in <span>Node.js</span> ,
        <span>React.js</span> ,<span>Python</span> and database management
        systems like <span>MySQL</span> and <span> MongoDB</span>. Skilled in
        creating visually appealing interfaces and collaborating with
        cross-functional teams to deliver high-quality solutions.
      </p>
      <Button value="Explore" href="#projects" />
    </section>
  );
};

export default HomePage;
