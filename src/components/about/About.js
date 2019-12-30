import React from 'react';

import AboutPt from './AboutPt';
import './about.css';

const aboutPts = [
  {
    title: 'Development',
    iconPath: './images/Software.png',
    notes:
      "I have experience working on software for F-16's, mobile apps, desktop apps, and websites."
  },
  {
    title: 'Responsive Design',
    iconPath: './images/responsive.png',
    notes:
      'Responsive design is key for a great user experience. I can make a great experience on any device.'
  },
  {
    title: 'Communication',
    iconPath: './images/communication.png',
    notes: 'I believe that communication will insure the best results.'
  }
];

const About = () => {
  var myPoints = aboutPts.map(function(pt, i) {
    return <AboutPt key={i} {...pt} />;
  });
  return (
    <>
      <div className="about">
        <h1>About</h1>
      </div>
      <div className="aboutBody">
        <section className="aboutIntro">
          Adaptive full-stack developer with a passion for solving problems,
          creating the best user experience, and continuous learning.
        </section>
        <div className="mySkills">{myPoints}</div>
      </div>
    </>
  );
};

export default About;
