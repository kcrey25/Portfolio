import React, { useState, useEffect, useRef } from 'react';

import './home.css';
import Skills from '../Skills/Skills';
import About from '../about/About';
import Nav from '../header_footer/Nav';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import Education from '../education/Education';

const desktopWidth = 992;
const desktopHeight = 415;

const Home = () => {
  useEffect(() => {
    function handleResize() {
      setIsDesktop(
        window.innerWidth >= desktopWidth && window.innerHeight > desktopHeight
      );
    }
    handleResize();
    setIsLoading(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const [isDesktop, setIsDesktop] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const aboutRef = useRef(null);
  const meRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const mobileNavHeight = isDesktop ? 0 : 65;

  const scrollToRef = myRef =>
    window.scrollTo(0, myRef.current.offsetTop - mobileNavHeight);
  const handleScroll = section => {
    switch (section) {
      case 'about':
        scrollToRef(aboutRef);
        break;
      case 'experience':
        scrollToRef(experienceRef);
        break;
      case 'skills':
        scrollToRef(skillsRef);
        break;
      case 'education':
        scrollToRef(educationRef);
        break;
      case 'contact':
        scrollToRef(contactRef);
        break;
      default:
        scrollToRef(meRef);
        break;
    }
  };

  const executeScroll = myRef => scrollToRef(myRef);

  const imgUrl = isDesktop
    ? './images/Profile-Horiz.jpeg'
    : './images/Profile-Vert.jpeg';

  const meSectionContent = isDesktop ? (
    <h1 className="pic-title">
      <p onClick={aboutRef => executeScroll}>
        I want to <span className="create-things"> create things </span>
      </p>
      <p>
        that <span className="make-diff">change lives</span>
      </p>
    </h1>
  ) : (
    <div className="change-lives">
      <div>Let's Change Lives.</div>
    </div>
  );

  return isLoading ? null : (
    <>
      {/* Tells phones not to lie about their width: Use for all responsive designs. Applies margin to outside, padding to inside, etc... */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />

      <Nav isDesktop={isDesktop} scrolling={handleScroll} />
      <div className="intro" style={isDesktop ? { marginLeft: '200px' } : null}>
        <section id="me" className="me-section" ref={meRef}>
          <img
            src={imgUrl}
            className="pic"
            style={{ marginTop: `${mobileNavHeight}px` }}
          />
          {meSectionContent}
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="experience" ref={experienceRef}>
          <Experience />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="education" ref={educationRef}>
          <Education />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
