import React, { useEffect, useRef, useState } from 'react';
import { resume } from '../../assets';
import headerStyles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../Buttons/button';
import Lader from '../Loader/loader';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(useGSAP, ScrollToPlugin);

const Header = () => {
    const navBarRef = useRef<HTMLUListElement | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle(headerStyles.no_scroll);
    };

    const { contextSafe } = useGSAP({ scope: navBarRef });
    const scrollToSection = contextSafe((hrefValue: string) => {
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: hrefValue, offsetY: 120 }
        });
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsMenuOpen(false);
                if (document.body.classList.contains(headerStyles.no_scroll)) {
                    document.body.classList.remove(headerStyles.no_scroll);
                }
                //console.log(document.body.classList.contains(headerStyles.no_scroll));
            }
        };
        // Close navbar on window resize
        window.addEventListener('resize', handleResize);
        if (window.location.hash) {
            setTimeout(() => {
                scrollToSection(window.location.hash);
            }, 300);
        }
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <React.Fragment>
            <header id={headerStyles.mainHeader} className={`${headerStyles.mainHeader} ${isMenuOpen && headerStyles.unactive}`}>
                <div id={headerStyles.mainHeaderItem1}>
                    <figure>
                        <Lader
                            style={{
                                display: 'flex',
                                height: '70px'
                            }}
                        />
                    </figure>
                </div>
                <div id={headerStyles.mainHeaderItem2} className={isMenuOpen ? headerStyles.active : ''}>
                    <nav>
                        <ul
                            onClick={(e: React.MouseEvent<HTMLUListElement>) => {
                                const target = e.target as HTMLElement;

                                if (target.tagName === 'A') {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    document.body.classList.remove(headerStyles.no_scroll);
                                    const hrefValue: string | null = target.getAttribute('href');
                                    console.log('href', hrefValue);
                                    if (hrefValue) {
                                        // Skip GSAP scrolling for external links
                                        if (hrefValue.includes('.pdf') || hrefValue.startsWith('http')) {
                                            window.open(hrefValue, '_blank');
                                            return;
                                        }
                                        window.history.pushState(null, '', hrefValue);
                                        scrollToSection(hrefValue);
                                    }
                                }
                            }}
                            ref={navBarRef}
                        >
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#exp">Experience</a>
                            </li>
                            <li>
                                <a href="#projects">Work</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <div>
                                <Button value="Resume" href={resume} />
                            </div>
                        </ul>
                    </nav>
                </div>
                <FontAwesomeIcon
                    icon={isMenuOpen ? faXmark : faBars}
                    onClick={toggleIsMenuOpen}
                    id={isMenuOpen ? headerStyles.closeIcon : headerStyles.menuIcon}
                />
            </header>
        </React.Fragment>
    );
};

export default Header;
