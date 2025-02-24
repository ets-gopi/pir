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
        robust web applications. Proficient in Node.js, React.js, Python,and
        database management systems like MySQL and MongoDB. Skilled in creating
        visually appealing interfaces and collaborating with cross-functional
        teams to deliver high-quality solutions.
      </p>
      <Button value="Explore" />
    </section>
  );
};

export default HomePage;
