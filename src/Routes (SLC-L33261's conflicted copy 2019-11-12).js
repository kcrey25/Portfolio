import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience';
import Contact from './components/contact/Contact';
import NotFound from './components/util/notFound';
import Header from './components/header_footer/Nav';
import Footer from './components/header_footer/Footer';

const Routes = () => {
  const contentStyle = !isDesktop
    ? {}
    : {
        marginLeft: Header.innerWidth
      };

  return (
    <>
      <Home />
      <Footer />
    </>
  );
};

export default Routes;
