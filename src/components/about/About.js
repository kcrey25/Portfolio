import React from 'react';
import * as imgDev from '../../resources/images/Software.png';
import * as imgResponsive from '../../resources/images/responsive.png';
import * as imgCom from '../../resources/images/communication.png';

import AboutPt from './AboutPt';
import './about.css';

const aboutPts = [
  {
    title: 'Development',
    iconPath: imgDev,
    notes:
      "I have experience working on software for F-16's, mobile apps, desktop apps, and websites."
  },
  {
    title: 'Responsive Design',
    iconPath: imgResponsive,
    notes:
      'Responsive design is key for a great user experience. I can make a great experience on any device.'
  },
  {
    title: 'Communication',
    iconPath: imgCom,
    notes: 'I believe that communication will insure the best results.'
  }
];

const About = () => {
  var myPoints = aboutPts.map((pt, i) => {
    return <AboutPt key={i} {...pt} />;
  });
  return (
    <React.Fragment>
      <div className="about">
        <h1>About</h1>
      </div>
      <div className="aboutBody">
        <section>
          <div className="about-left">
            Adaptive full-stack developer with a passion for solving problems,
            creating the best user experience, and continuous learning.
          </div>
          <div className="about-me">
            <p>
              I love creating through software development. It has been my
              passion for the last decade! Although I do spend a lot of time at
              work, I am more than just a developer.
            </p>
            <p style={{ marginTop: '15px' }}>
              I have a gorgeous wife and 4 crazy boys. I absolutely love
              spending time with them. We spend most of our time outdoors, from
              playing in our backyard to amazing hikes up the canyon. I also
              snowboard and play baseball as much as I can.
            </p>
          </div>
        </section>
        <div className="mySkills">{myPoints}</div>
      </div>
    </React.Fragment>
  );
};

export default About;
