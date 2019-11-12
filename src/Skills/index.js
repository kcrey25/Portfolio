import React from 'react';
import Skill from './Skill';
import '../css/index.css';

const Skills = () => {
  var skills = [
    {
      title: 'Development',
      iconPath: './images/Software.png',
      notes:
        "I have experience working on software for F-16's, mobile apps, desktop apps, and websites."
    },
    {
      title: 'Responsive Design',
      iconPath: './/images/responsive.png',
      notes:
        'Responsive design is key for a great user experience. I can make a great experience on any device.'
    },
    {
      title: 'Communication',
      iconPath: './/images/communication.png',
      notes: 'I believe that communication will insure the best results.'
    }
  ];
  var mySkills = skills.map(function(skill, i) {
    return <Skill key={i} {...skill} />;
  });
  return <div className="mySkills">{mySkills}</div>;
};

export default Skills;
