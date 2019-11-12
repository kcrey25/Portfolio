import React, { useState, useEffect, useRef } from 'react';

import '../../css/home.css';
import Skills from '../../Skills';
import About from '../about/About';
import Nav from '../header_footer/Nav';

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

  const scrollToRef = () => window.scrollTo(0, aboutRef.current.offsetTop);
  const handleScroll = section => {
    switch (section) {
      case 'about':
        scrollToRef(aboutRef);
        break;
    }
  };

  const executeScroll = () => scrollToRef();

  const imgUrl = isDesktop
    ? './images/Profile-Horiz.jpeg'
    : './images/Profile-Vert.jpeg';

  const meSectionContent = isDesktop ? (
    <h1 className="pic-title">
      <p onClick={executeScroll}>
        I want to <span className="create-things"> create things </span>
      </p>
      <p>
        that <span className="make-diff">change lives</span>
      </p>
    </h1>
  ) : (
    <div className="change-lives">
      <label>Let's Change Lives.</label>
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
        <section id="me" className="me-section">
          <img src={imgUrl} className="pic" />
          {meSectionContent}
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section></section>
        <Skills />
      </div>
    </>
  );
};

export default Home;
