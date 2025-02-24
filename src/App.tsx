import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import HomePage from "./components/pages/home/homePage";
import Footer from "./components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faHackerrank,
  faLinkedin,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Link from "./components/Links/link";
import Sidebar from "./components/SideBars/sidebar";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <aside id="sidebar1">
        <Link url="https://github.com/GD-0606">
          <FontAwesomeIcon icon={faGithub} title="Github"/>
        </Link>
        <Link url="https://www.linkedin.com/in/gopimuppuri/">
          <FontAwesomeIcon icon={faLinkedin} title="Linkedin"/>
        </Link>
        <Link url="https://www.hackerrank.com/profile/muppurigopi117/">
          <FontAwesomeIcon icon={faHackerrank} title="Hackerrank" />
        </Link>
        <Link url=" https://www.linux.org/">
          <FontAwesomeIcon icon={faLinux} title="Linux" />
        </Link>
        <Sidebar />
      </aside>
      <aside id="sidebar2">
        <p>muppurigopi117@gmail.com</p>
        <Sidebar />
      </aside>
    </React.Fragment>
  );
}

export default App;
