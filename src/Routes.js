import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import NotFound from './components/util/notFound';
import Header from './components/header_footer/Header';
//import Footer from './components/header_footer/Footer';

const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route restricted={false} path='/' exact component={Home} />
        <Route restricted={false} path='/about' exact component={About} />
        <Route restricted={false} path='/projects' exact component={Projects} />
        <Route
          restricted={false}
          path='/experience'
          exact
          component={Experience}
        />
        <Route restricted={false} path='/contact' exact component={Contact} />
        <Route restricted={false} component={NotFound} />
      </Switch>
      {/* <Footer/> */}
    </>
  );
};

export default Routes;
