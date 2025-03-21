import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/header';
import HomePage from './components/pages/Home/homePage';
import Footer from './components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHackerrank, faLinkedin, faLinux } from '@fortawesome/free-brands-svg-icons';
import Link from './components/Links/link';
import Sidebar from './components/SideBars/sidebar';
import AboutPage from './components/pages/About/aboutPage';
import ProjectsPage from './components/pages/Work/projectsPage';
import ExpPage from './components/pages/Experience/expriencePage';
import ContactPage from './components/pages/Contact/contactPage';
import Lader from './components/Loader/loader';
import CertificatePage from './components/pages/Certificate/certificatePage';
function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        timer = setTimeout(() => {
            setIsLoading(false);
            clearTimeout(timer);
        }, 2500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <React.Fragment>
            {isLoading ? (
                <Lader animation={true} />
            ) : (
                <React.Fragment>
                    <Header />
                    <main>
                        <HomePage />
                        <AboutPage />
                        <ExpPage />
                        <ProjectsPage />
                        <CertificatePage />
                        <ContactPage />
                    </main>
                    <Footer />
                    <aside id="sidebar1">
                        <Link url="https://github.com/GD-0606">
                            <FontAwesomeIcon icon={faGithub} title="Github" />
                        </Link>
                        <Link url="https://www.linkedin.com/in/gopimuppuri/">
                            <FontAwesomeIcon icon={faLinkedin} title="Linkedin" />
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
            )}
        </React.Fragment>
    );
}

export default App;
